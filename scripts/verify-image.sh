#!/usr/bin/env bash
set -euo pipefail
IMAGE="${1:?Usage: $0 ACCOUNT_ID.dkr.ecr.REGION.amazonaws.com/REPO@sha256:DIGEST}"
IDENTITY="${2:?Usage: $0 IMAGE EXPECTED_CERTIFICATE_IDENTITY}"
cosign verify \
  --certificate-identity "$IDENTITY" \
  --certificate-oidc-issuer "https://token.actions.githubusercontent.com" \
  "$IMAGE"
