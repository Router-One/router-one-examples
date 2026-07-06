// Chat completion via the official OpenAI SDK pointed at Router One.
// Two constructor arguments — baseURL and apiKey — and the same client
// reaches GPT, Claude, Gemini, and DeepSeek family models by model string.
// Pick a model ID from https://router.one/models.
//
// Run: ROUTER_ONE_API_KEY=sk-... npm run chat
import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.router.one/v1",
  apiKey: process.env.ROUTER_ONE_API_KEY,
});

const response = await client.chat.completions.create({
  model: process.env.ROUTER_ONE_MODEL ?? "<model-id-from-router.one/models>",
  messages: [
    { role: "user", content: "In one sentence, what is an LLM API gateway?" },
  ],
});

console.log(response.choices[0].message.content);
