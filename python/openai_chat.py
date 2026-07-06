"""Chat completion via the official OpenAI SDK pointed at Router One.

The whole migration is two constructor arguments: base_url and api_key.
The same client then reaches GPT, Claude, Gemini, and DeepSeek family
models by model string — pick any ID from https://router.one/models.

Run: ROUTER_ONE_API_KEY=sk-... python openai_chat.py
"""

import os

from openai import OpenAI

client = OpenAI(
    base_url="https://api.router.one/v1",
    api_key=os.environ["ROUTER_ONE_API_KEY"],
)

response = client.chat.completions.create(
    model=os.environ.get("ROUTER_ONE_MODEL", "<model-id-from-router.one/models>"),
    messages=[
        {"role": "user", "content": "In one sentence, what is an LLM API gateway?"}
    ],
)

print(response.choices[0].message.content)
