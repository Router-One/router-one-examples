"""LangChain via Router One.

LangChain apps usually hardwire one provider class per model family.
Because Router One is OpenAI-compatible, a single ChatOpenAI
configuration reaches GPT, Claude, Gemini, and DeepSeek family models —
swap the model string, keep the code.

Run: ROUTER_ONE_API_KEY=sk-... python langchain_chat.py
"""

import os

from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    base_url="https://api.router.one/v1",
    api_key=os.environ["ROUTER_ONE_API_KEY"],
    model=os.environ.get("ROUTER_ONE_MODEL", "<model-id-from-router.one/models>"),
)

result = llm.invoke("In one sentence, what is an LLM API gateway?")
print(result.content)
