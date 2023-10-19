const APP_NAME = process.env.NODE_NAME;
const NODE_ENV = process.env.NODE_ENV;
const NODE_HOSTNAME = process.env.NODE_HOSTNAME;
const NODE_PORT = process.env.NODE_PORT;

const DB_CONFIG = Object.freeze({
  dbName: 'db_my_app',
  dbUri: `${ process.env.MONGODB_DB_URL}/${ process.env.MONGODB_DB_NAME }`,
  dbColl: 'coll_users'
})

const REDIS_CONFIG = Object.freeze({
  host: process.env.REDIS_DB_HOST,
  port: process.env.REDIS_DB_PORT,
  ttl: process.env.REDIS_DB_TTL,
  cacheKeyPrefix: `${ APP_NAME }:`
})

const ERROR_MSG = Object.freeze({
  post: {
    MISSING_PARAMETER: 'missing parameter: ',
    EXISTING_USER: 'user already exists',
    INVALID_EMAIL: 'invalid email'
  },
  get: {}
});

export default Object.freeze({
  APP_NAME,
  ERROR_MSG,
  NODE_ENV,
  NODE_HOSTNAME,
  NODE_PORT,
  DB_CONFIG,
  REDIS_CONFIG
})