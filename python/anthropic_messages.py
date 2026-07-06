"""Claude family models via the official Anthropic SDK pointed at Router One.

The Anthropic-compatible endpoint (https://api.router.one, no /v1 suffix)
serves Claude family models over the Messages API. This is the same
endpoint Claude Code uses. For other model families, use the
OpenAI-compatible endpoint instead (see openai_chat.py).

Run: ROUTER_ONE_API_KEY=sk-... python anthropic_messages.py
"""

import os

from anthropic import Anthropic

client = Anthropic(
    base_url="https://api.router.one",
    auth_token=os.environ["ROUTER_ONE_API_KEY"],
)

message = client.messages.create(
    model=os.environ.get("ROUTER_ONE_MODEL", "<claude-model-id-from-router.one/models>"),
    max_tokens=256,
    messages=[
        {"role": "user", "content": "In one sentence, what is an LLM API gateway?"}
    ],
)

print(message.content[0].text)
