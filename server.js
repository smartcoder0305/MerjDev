const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const compression = require('compression');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const mailer = require('./api/mailer');

app.prepare().then(() => {
  const server = express();

  if (!dev) {
    server.use(compression());
  }

  server.use(bodyParser.json());

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.post('/api/contact', (req, res) => {
    mailer(req.body)
      .then(() => {
        console.log('success');
        res.send('success');
      })
      .catch((error) => {
        res.send('error');
        console.log('failed', error);
      });
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Read on http://localhost:3000');
  });
});
