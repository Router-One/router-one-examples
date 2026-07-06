#!/usr/bin/env bash
# List the models your key can reach.
# Full catalog with per-token rates: https://router.one/models
# Usage: ROUTER_ONE_API_KEY=sk-... ./models.sh
set -euo pipefail

: "${ROUTER_ONE_API_KEY:?Set ROUTER_ONE_API_KEY (get one at https://router.one)}"

curl -sS https://api.router.one/v1/models \
  -H "Authorization: Bearer ${ROUTER_ONE_API_KEY}"
