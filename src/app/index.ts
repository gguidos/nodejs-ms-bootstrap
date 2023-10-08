import * as dotenv from "dotenv";
dotenv.config()

import * as express from 'express';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as cors from 'cors';

const app = express();
const hostname = process.env.NODE_HOSTNAME;
const port = process.env.NODE_PORT;

app.use(cors());
app.use(helmet());
app.use(compression());
 
app.get('/', (req, res) => {
  res.end('Hello world!');
})
 
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
