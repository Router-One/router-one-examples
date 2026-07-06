"""Streaming chat completion via the OpenAI SDK pointed at Router One.

Run: ROUTER_ONE_API_KEY=sk-... python openai_streaming.py
"""

import os

from openai import OpenAI

client = OpenAI(
    base_url="https://api.router.one/v1",
    api_key=os.environ["ROUTER_ONE_API_KEY"],
)

stream = client.chat.completions.create(
    model=os.environ.get("ROUTER_ONE_MODEL", "<model-id-from-router.one/models>"),
    messages=[{"role": "user", "content": "Write a haiku about API gateways."}],
    stream=True,
)

for chunk in stream:
    delta = chunk.choices[0].delta.content
    if delta:
        print(delta, end="", flush=True)
print()
