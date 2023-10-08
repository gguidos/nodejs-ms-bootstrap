import * as dotenv from "dotenv";
dotenv.config()

import { server } from './initializers/express'

try {
  server()
  process.on('uncaughtException', (err) => {
    console.error('[SERVICE] Caught exception: ' + err);
  });
} catch (error) {
  console.log(error)
}
