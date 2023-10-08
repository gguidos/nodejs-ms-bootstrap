const { dirname } = require('path');

const users = require(`${ process.cwd() }${ process.env.NODE_FILE_FOLDER }/users.json`);

const routes = [
  { path: '/register', method: 'get', component: register }
]

function register(req, res) {
  console.log(users)
  res.end('Hello world!');
}

export {
  routes
}