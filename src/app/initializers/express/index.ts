import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import * as helmet from 'helmet';
import createServer from './libs/express';
import * as handler from '../../component/handler'

const app = express();

const server = () =>
  createServer({ 
    app, handler, cors, compression, helmet 
  })
  .server({
    hostname: process.env.NODE_HOSTNAME,
    port: process.env.NODE_PORT
  });

export {
  server
}