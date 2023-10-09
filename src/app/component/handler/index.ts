const fileFolder = process.env.NODE_FILE_FOLDER;
const baseDir = process.cwd()
const users = require(`${ baseDir }${ fileFolder }/users.json`);

const baseUrl = '/api/v1'

const routes = [
  { path: `${baseUrl}/authenticate`, method: 'get', component: authenticate },
  { path: `${baseUrl}/find/:username`, method: 'get', component: findUser },
  { path: `${baseUrl}/register`, method: 'post', component: register }
]

function findUser(req,res) {
  res.json(req.params)
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