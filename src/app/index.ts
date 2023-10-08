import * as dotenv from "dotenv";
dotenv.config()

import * as express from 'express';
import helmet from 'helmet';
import * as cors from 'cors';
import * as compression from 'compression';

app.get('/', (req, res) => {
  res.end('Hello world!');
})

app.listen(port, hostname, () => {
  console.log(`[EXPRESS] Server running at http://${hostname}:${port}/`);
});
