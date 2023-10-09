require('dotenv').config();

import { server } from './initializers/express';
const logger = require('./libs/logger');

try {
  logger.info('[AUTH MS] Boostrapping micro service');
  server();
  process.on('uncaughtException', (err) => {
    logger.error(`[AUTH MS] Caught exception: ${ err }`);
  });
} catch (error) {
  logger.error(`[AUTH MS] Caught exception: ${ error }`);
}