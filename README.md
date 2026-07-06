# Router One Examples

Runnable examples for calling **[Router One](https://router.one)** — a unified LLM API gateway. One OpenAI-compatible endpoint, one API key, 40+ supported models (GPT, Claude, Gemini, DeepSeek, Mistral, Llama and more) at up to 90% off official prices, with smart routing, automatic provider fallback, and a cost trace for every request.

## Endpoints

| Protocol | Base URL | Use with |
| --- | --- | --- |
| OpenAI-compatible (Chat Completions) | `https://api.router.one/v1` | OpenAI SDKs, LangChain, Vercel AI SDK, Codex CLI, most tools |
| Anthropic-compatible (Messages) | `https://api.router.one` | Claude Code, Anthropic SDKs (Claude family models) |

Endpoints map strictly by protocol family: the Anthropic-compatible endpoint serves Claude family models; the Chat Completions endpoint reaches every major model family by model string.

## Quick start

1. Get an API key from the [Router One dashboard](https://router.one/) (keys start with `sk-`).
2. Copy `.env.example` to `.env` and fill in your key.
3. Pick a model ID from the [model catalog](https://router.one/models).
4. Run any example below.

```bash
curl https://api.router.one/v1/chat/completions \
  -H "Authorization: Bearer $ROUTER_ONE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "<model-id-from-router.one/models>",
    "messages": [{"role": "user", "content": "Say hello from the gateway."}]
  }'
```

## Examples

| Directory | What's inside |
| --- | --- |
| [`curl/`](curl/) | Chat completion, streaming, model list — no dependencies |
| [`python/`](python/) | OpenAI SDK (chat + streaming), Anthropic SDK, LangChain |
| [`node/`](node/) | OpenAI SDK (chat + streaming), Anthropic SDK, Vercel AI SDK |

Every request you send shows up in **Dashboard → Logs** with model, tokens, cost, latency, status, and the routing decision — so each example call leaves a trace you can inspect.

## Related

- [Model catalog & per-token rates](https://router.one/models)
- [API docs](https://router.one/docs)
- [Error codes reference](https://router.one/llm-api-error-codes) (401 / 402 / 429 / 529 …)
- [Claude Code & Codex CLI setup](https://router.one/use-cases/ai-coding-tools)

## License

[MIT](LICENSE)
