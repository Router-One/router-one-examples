// Vercel AI SDK via Router One's OpenAI-compatible endpoint.
// createOpenAI takes the base URL and key; generateText and streamText
// then work with any model ID from https://router.one/models.
//
// Run: ROUTER_ONE_API_KEY=sk-... npm run ai-sdk
import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";

const routerOne = createOpenAI({
  baseURL: "https://api.router.one/v1",
  apiKey: process.env.ROUTER_ONE_API_KEY,
});

const { text } = await generateText({
  model: routerOne(
    process.env.ROUTER_ONE_MODEL ?? "<model-id-from-router.one/models>",
  ),
  prompt: "In one sentence, what is an LLM API gateway?",
});

console.log(text);
