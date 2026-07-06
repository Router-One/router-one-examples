// Streaming chat completion via the OpenAI SDK pointed at Router One.
//
// Run: ROUTER_ONE_API_KEY=sk-... npm run streaming
import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.router.one/v1",
  apiKey: process.env.ROUTER_ONE_API_KEY,
});

const stream = await client.chat.completions.create({
  model: process.env.ROUTER_ONE_MODEL ?? "<model-id-from-router.one/models>",
  messages: [{ role: "user", content: "Write a haiku about API gateways." }],
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content ?? "");
}
process.stdout.write("\n");
