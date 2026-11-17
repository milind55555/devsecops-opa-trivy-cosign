# Evidence folder

Place genuine evidence captured from your own run here. Suggested files:

- `github-actions-trivy-block.png` – failed Trivy step for a controlled vulnerable test image.
- `gatekeeper-deny.png` – Gatekeeper admission denial for tag-only or unapproved image.
- `kyverno-unsigned-deny.png` – Kyverno denial for an unsigned ECR digest.
- `cosign-verify-success.png` – successful `cosign verify` output.
- `signed-deployment-success.png` – successful deployment of a signed image digest.

Do not add fabricated screenshots or claim that a test passed unless you ran it.
