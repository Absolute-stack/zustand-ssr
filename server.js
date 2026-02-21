import fs from 'fs';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import { render } from './dist/entry-server.js';
import { renderToPipeableStream } from 'react-dom/server';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const template = fs.readFileSync('./dist/index.html', 'utf-8');
const [head, tail] = template.split('<!--ssr-outlet-->');

app.use('/assets', express.static(path.resolve(__dirname, './dist/assets')));

app.get('*', (req, res) => {
  const reactTree = render(req.url);

  const { pipe } = renderToPipeableStream(reactTree, {
    onShellReady() {
      res.status(200);
      res.write(head);
      pipe(res);
    },
    onAllReady() {
      res.write(tail);
      res.end();
    },
    onShellError(err) {
      console.error(err);
    },
  });
});

app.listen(9000, () =>
  console.log(`✅Listening on SSR server on PORT:9000...`),
);
