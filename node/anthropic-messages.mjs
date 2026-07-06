// Claude family models via the official Anthropic SDK pointed at Router One.
// The Anthropic-compatible endpoint (https://api.router.one, no /v1 suffix)
// serves Claude family models over the Messages API — the same endpoint
// Claude Code uses. For other model families, use the OpenAI-compatible
// endpoint instead (see openai-chat.mjs).
//
// Run: ROUTER_ONE_API_KEY=sk-... npm run anthropic
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  baseURL: "https://api.router.one",
  authToken: process.env.ROUTER_ONE_API_KEY,
});

const message = await client.messages.create({
  model:
    process.env.ROUTER_ONE_MODEL ?? "<claude-model-id-from-router.one/models>",
  max_tokens: 256,
  messages: [
    { role: "user", content: "In one sentence, what is an LLM API gateway?" },
  ],
});

console.log(message.content[0].text);
