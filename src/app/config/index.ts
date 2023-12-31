const APP_NAME = process.env.NODE_NAME;
const NODE_ENV = process.env.NODE_ENV;
const NODE_HOSTNAME = process.env.NODE_HOSTNAME;
const NODE_PORT = process.env.NODE_PORT;
const FILE_FOLDER_NAME = process.env.NODE_FILE_FOLDER;
const FILE_FOLDER_PATH = process.cwd() + process.env.NODE_FILE_FOLDER;
const FILE_DB_NAME = process.env.NODE_DB_FILE;
const FILE_DB_PATH = `${ FILE_FOLDER_PATH }/${ FILE_DB_NAME }`;
const MONGO_DB_URL = process.env.MONGODB_DB_URL;
const MONGO_DB_NAME = process.env.MONGODB_DB_NAME;
const MONGO_DB_COLLECTION = process.env.MONGODB_DB_COLLECTION;
const JWT_SECRET = process.env.JWT_TOKEN_SECRET;

const DB_CONFIG = {
  dbName: 'db_my_app',
  dbUri: `${ MONGO_DB_URL }/${ MONGO_DB_NAME }`,
  dbColl: MONGO_DB_COLLECTION
}

const CACHE_CONFIG = Object.freeze({
  host: process.env.REDIS_DB_HOST,
  port: process.env.REDIS_DB_PORT,
  ttl: parseInt(process.env.REDIS_DB_TTL),
  cacheKeyPrefix: `${ APP_NAME }:`
})

const ERROR_MSG = {
  post: {
    MISSING_PARAMETER: 'missing parameter: ',
    EXISTING_USER: 'user already exists',
    INVALID_EMAIL: 'invalid email'
  }
};

export default Object.freeze({
  APP_NAME,
  ERROR_MSG,
  CACHE_CONFIG,
  JWT_SECRET,
  NODE_ENV,
  NODE_HOSTNAME,
  NODE_PORT,
  DB_CONFIG
})