require('dotenv').config();

import { server } from './initializers/express';
import { logger } from './libs/logger';

const name = process.env.NODE_NAME;
const hostname = process.env.NODE_HOSTNAME;
const port = process.env.NODE_PORT;

try {
  logger.info(`[${ name }] Boostrapping micro service`);
  server({ hostname, port});
} catch (error) {
  logger.error(`[${ name }] Caught exception: ${ error }`);
}
