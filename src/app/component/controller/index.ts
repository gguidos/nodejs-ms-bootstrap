import { logger } from '../../libs/logger';
import { post,get } from '../use-cases';
const baseUrl = '/api/v1';

const getEP = async (req, res) => {
  try {
    const results = await get({ params: req.params });
    res.json({ err: 0, data: results });
  } catch (err) {
    logger.error(`[EP][GET] ${req.method }: ${ err }`)
    res.status(403)
    res.json({err: 1, data: { err }})
   }
}

const postEP = async (req, res) => {
  try { 
    let results = await post({ params: req.body });
    res.json({ err: 0, data: results });
  } catch (err) {
    logger.error(`[EP][POST] ${req.method }: ${err.message}`)
    res.status(403)
    res.json({ err: 1, data: err.message })
   }
}

const routes = [
  { path: `${baseUrl}/user/:username?/email/:email?`, method: 'get', component: getEP },
  { path: `${baseUrl}/`, method: 'post', component: postEP }
];

export {
  routes
}
