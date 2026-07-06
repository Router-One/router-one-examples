#!/usr/bin/env bash
# Streaming chat completion (server-sent events).
# Usage: ROUTER_ONE_API_KEY=sk-... ./streaming.sh
set -euo pipefail

: "${ROUTER_ONE_API_KEY:?Set ROUTER_ONE_API_KEY (get one at https://router.one)}"
MODEL="${ROUTER_ONE_MODEL:-<model-id-from-router.one/models>}"

curl -N -sS https://api.router.one/v1/chat/completions \
  -H "Authorization: Bearer ${ROUTER_ONE_API_KEY}" \
  -H "Content-Type: application/json" \
  -d "$(cat <<JSON
{
  "model": "${MODEL}",
  "stream": true,
  "messages": [
    {"role": "user", "content": "Count from 1 to 5, one number per line."}
  ]
}
JSON
)"
