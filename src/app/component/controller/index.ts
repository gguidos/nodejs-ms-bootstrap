import { logger } from '../../libs/logger';
import { post } from '../use-cases';
const baseUrl = '/api/v1';

const get = (req,res) => res.json({ data: 'Hello, world!' });

const postEP = (req, res) => {
  try { 
    const results = post({ params: req.body });
    res.json({ data: results });
  } catch (err) {
    logger.error(err)
   }
}

const routes = [
  { path: `${baseUrl}/`, method: 'get', component: get },
  { path: `${baseUrl}/`, method: 'post', component: postEP }
];

export {
  routes
}
