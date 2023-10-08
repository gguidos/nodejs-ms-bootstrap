import * as dotenv from "dotenv";
dotenv.config()

const logger = require('./libs/logger');

import * as express from 'express';
import helmet from 'helmet';
import * as cors from 'cors';
import * as compression from 'compression';

const app = express();
const hostname = process.env.NODE_HOSTNAME;
const port = process.env.NODE_PORT;

app.use(helmet());
app.use(cors());
app.use(compression());
 
app.get('/', (req, res) => {
  logger.info(`[EXPRESS] path: ${req.path}, req: ${req.method}, ip: ${req.ip} `)
  res.end('Hello world!');
})

app.listen(port, hostname, () => {
  logger.info(`[EXPRESS] Server running at http://${hostname}:${port}/`);
});
