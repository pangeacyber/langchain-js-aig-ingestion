import process from 'node:process';

import { config } from '@dotenvx/dotenvx';
import { StringOutputParser } from '@langchain/core/output_parsers';
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
} from '@langchain/core/prompts';
import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai';
import { defineCommand, runMain } from 'citty';
import { consola } from 'consola';
import { createStuffDocumentsChain } from 'langchain/chains/combine_documents';
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';

import { GuardedTextLoader } from './loaders/ai-guard.js';

config({ override: true, quiet: true });

const prompt = ChatPromptTemplate.fromMessages([
  HumanMessagePromptTemplate.fromTemplate(`You are an assistant for question-answering tasks. Use the following pieces of retrieved context to answer the question. If you don't know the answer, just say that you don't know. Use three sentences maximum and keep the answer concise.
Question: {input}
Context: {context}
Answer:`),
]);

const main = defineCommand({
  args: {
    prompt: { type: 'positional' },
    model: {
      type: 'string',
      default: 'gpt-4o-mini',
      description: 'OpenAI model.',
    },
  },
  async run({ args }) {
    const aiGuardToken = process.env.PANGEA_AI_GUARD_TOKEN;
    if (!aiGuardToken) {
      consola.warn('PANGEA_AI_GUARD_TOKEN is not set.');
      return;
    }

    const pangeaDomain = process.env.PANGEA_DOMAIN || 'aws.us.pangea.cloud';

    const loader = new DirectoryLoader('data', {
      '.md': (path) => new GuardedTextLoader(path, aiGuardToken, pangeaDomain),
    });
    const docs = await loader.load();
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 3500,
      chunkOverlap: 50,
    });
    const splits = await splitter.splitDocuments(docs);
    const vectorStore = await MemoryVectorStore.fromDocuments(
      splits,
      new OpenAIEmbeddings()
    );
    const retriever = vectorStore.asRetriever();

    const llm = new ChatOpenAI({ model: args.model });
    const chain = await createStuffDocumentsChain({
      llm,
      prompt,
      outputParser: new StringOutputParser(),
    });

    consola.log(
      await chain.invoke({
        input: args.prompt,
        context: await retriever.invoke(args.prompt),
      })
    );
  },
});

runMain(main);
