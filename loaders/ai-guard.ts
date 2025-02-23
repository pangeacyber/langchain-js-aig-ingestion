import { TextLoader } from 'langchain/document_loaders/fs/text';
import { AIGuardService, PangeaConfig } from 'pangea-node-sdk';

export class GuardedTextLoader extends TextLoader {
  private client;

  constructor(
    filePathOrBlob: string | Blob,
    token: string,
    domain = 'aws.us.pangea.cloud'
  ) {
    super(filePathOrBlob);

    this.client = new AIGuardService(token, new PangeaConfig({ domain }));
  }

  override async load() {
    const docs = await super.load();

    await Promise.all(
      docs.map(async (doc) => {
        const guarded = await this.client.guardText({ text: doc.pageContent });
        if (guarded.result.prompt_text) {
          doc.pageContent = guarded.result.prompt_text;
        }
      })
    );

    return docs;
  }
}
