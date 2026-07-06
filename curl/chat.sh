#!/usr/bin/env bash
# Basic chat completion through the Router One gateway.
# Usage: ROUTER_ONE_API_KEY=sk-... ./chat.sh
set -euo pipefail

: "${ROUTER_ONE_API_KEY:?Set ROUTER_ONE_API_KEY (get one at https://router.one)}"
MODEL="${ROUTER_ONE_MODEL:-<model-id-from-router.one/models>}"

curl -sS https://api.router.one/v1/chat/completions \
  -H "Authorization: Bearer ${ROUTER_ONE_API_KEY}" \
  -H "Content-Type: application/json" \
  -d "$(cat <<JSON
{
  "model": "${MODEL}",
  "messages": [
    {"role": "user", "content": "In one sentence, what is an LLM API gateway?"}
  ]
}
JSON
)"
