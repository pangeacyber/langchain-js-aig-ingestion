# AI Guard Data Ingestion for LangChain in JavaScript

An example JavaScript app that demonstrates integrating Pangea's [AI Guard][]
service into a LangChain app to protect data ingestion.

In this case, the data to be ingested consists of articles about authentication
from our [Secure by Design Hub][] included in `data/`.

## Prerequisites

- Node.js v22.
- A [Pangea account][Pangea signup] with AI Guard enabled.
- An [OpenAI API key][OpenAI API keys].

## Setup

```shell
git clone https://github.com/pangeacyber/langchain-js-aig-ingestion.git
cd langchain-js-aig-ingestion
npm install
cp .env.example .env
```

Fill in the values in `.env` and then the app can be run like so:

```shell
npm run demo -- "What do you know about OAuth?"
```

_Note:_ Because our context is limited to the authentication articles mentioned
above, if you ask a question outside that context, you will get some variation
of "I don't know."

Sample output:

```
OAuth 2.0 is a protocol focused on authorization and resource access control,
while OpenID Connect (OIDC) is built on OAuth 2.0 and specializes in user
authentication. OIDC allows applications to verify a user's identity without
handling their credentials, utilizing tokens for this purpose. It enables a
convenient login process, often through social providers, enhancing user
experience and security.
```

[AI Guard]: https://pangea.cloud/docs/ai-guard/
[Secure by Design Hub]: https://pangea.cloud/securebydesign/
[Pangea signup]: https://pangea.cloud/signup
[OpenAI API keys]: https://platform.openai.com/api-keys
