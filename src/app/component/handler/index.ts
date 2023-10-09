const fileFolder = process.env.NODE_FILE_FOLDER;
const baseDir = process.cwd()
const users = require(`${ baseDir }${ fileFolder }/users.json`);
import { findUser } from './libs'
const logger = require('../../libs/logger')
const baseUrl = '/api/v1/users'

const routes = [
  { path: `${baseUrl}/authenticate`, method: 'get', component: authenticate },
  { path: `${baseUrl}/find/:username?`, method: 'get', component: find },
  { path: `${baseUrl}/register`, method: 'post', component: register }
]

function find(req,res) {
  try {
    const results = findUser()
    res.json(results)
  } catch (err) {
    logger.error(err)
   }
  
}

function authenticate(req, res) {
  res.json(req.query)
}

function register(req, res) {
  res.json(req.body);
}

export {
  routes
}