# Brimble Sample

This is the deterministic demo app used by the control plane.

It is intentionally minimal:

- no external dependencies
- listens on `process.env.PORT || 3000`
- returns HTTP 200 on `/`
- returns HTTP 200 on `/healthz`

Use cases:

- archive deployment demo by uploading `brimble-sample/brimble-sample.tgz`
- Git deployment demo after publishing this directory as its own public repository
