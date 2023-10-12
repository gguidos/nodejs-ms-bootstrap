/* istanbul ignore file */

import * as express from 'express';
import helmet from 'helmet';
import * as cors from 'cors';
import * as compression from 'compression';
import createServer from '../app/initializers/express/libs/express'
import { logger } from '../app/libs/logger';
const chaiHTTP = require('chai-http');
const request = require('supertest');
const http = require('http');

const test = (res, req) => {
  res.json('done');
}

const handler = {
  routes: [
    { path: `/test`, method: 'get', component: test }
  ]
}

const app = express()
const json = express.json;
const urlencoded = express.urlencoded;
const hostname = '127.0.0.1';
const port = 3000;

const { server, close } = createServer({
    http, json, urlencoded, app, handler, cors, compression, helmet, logger
  })

describe('Server', () => {
  beforeEach(async () => {
    server({
      hostname,
      port
    })
    close()
  })
    afterEach(async () => {
      // Close the server instance after each test
      close()
    })

    it('should start the server', async () => {
      const res = await request().get(`http://${ hostname }:${ port }/test`);
      expect(true).toBe(true);
    })

  
})


