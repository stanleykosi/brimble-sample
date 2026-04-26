const http = require('node:http');

const port = Number(process.env.PORT || 3000);
const startedAt = new Date().toISOString();

const server = http.createServer((req, res) => {
  if (!req.url) {
    res.statusCode = 400;
    res.end('Missing URL');
    return;
  }

  if (req.url === '/healthz') {
    res.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
    res.end(
      JSON.stringify({
        status: 'ok',
        port,
        startedAt
      })
    );
    return;
  }

  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    res.end(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Brimble Sample</title>
    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        font-family: "IBM Plex Sans", "Segoe UI", sans-serif;
        background:
          radial-gradient(circle at top, rgba(255, 196, 111, 0.35), transparent 40%),
          linear-gradient(135deg, #101826, #172235 48%, #1d3150);
        color: #f6f8fb;
      }
      main {
        width: min(48rem, calc(100vw - 2rem));
        padding: 2rem;
        border-radius: 1.5rem;
        background: rgba(6, 14, 25, 0.72);
        border: 1px solid rgba(196, 214, 255, 0.18);
        box-shadow: 0 20px 80px rgba(0, 0, 0, 0.35);
      }
      h1 {
        margin-top: 0;
        font-size: clamp(2rem, 4vw, 3.5rem);
      }
      dl {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 0.75rem 1rem;
      }
      dt {
        color: #9eb6d9;
      }
      dd {
        margin: 0;
        font-family: "IBM Plex Mono", "SFMono-Regular", monospace;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Brimble Sample</h1>
      <p>This app exists to prove the control-plane pipeline works end to end.</p>
      <dl>
        <dt>Port</dt><dd>${port}</dd>
        <dt>Started At</dt><dd>${startedAt}</dd>
        <dt>Path</dt><dd>${req.url}</dd>
      </dl>
    </main>
  </body>
</html>`);
    return;
  }

  res.writeHead(404, { 'content-type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ error: 'Not Found', path: req.url }));
});

server.listen(port, () => {
  console.log(`Brimble sample listening on ${port}`);
});
