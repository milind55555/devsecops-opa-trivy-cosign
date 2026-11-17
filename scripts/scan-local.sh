#!/usr/bin/env bash
set -euo pipefail
IMAGE="${1:-devsecops-demo:local}"
docker build -t "$IMAGE" .
trivy fs --scanners vuln,misconfig,secret --severity CRITICAL --exit-code 1 .
trivy image --scanners vuln --severity CRITICAL --exit-code 1 "$IMAGE"
