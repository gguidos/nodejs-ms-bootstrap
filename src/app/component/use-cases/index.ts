import createPost from './post';
import createGet from './get';
import config from '../../config';
import { logger } from '../../libs/logger';
import { makeInputObj, makeOutputObj } from '../entities';
import {
  insertDocument,
  findDocuments,
  setCache,
  codeJWT
} from '../data-access';
import { insertOneDocument } from '../../libs/mongodb';

const dbConfig = config.DB_CONFIG;
const errorMsgs = config.ERROR_MSG;

const get = ({ params }) =>
 createGet({
    makeInputObj,
    findDocuments,
    makeOutputObj,
    logger
  }).get({
    params,
    dbConfig,
    errorMsgs
  })

const post = ({ params }) =>
  createPost({
    makeInputObj,
    insertDocument,
    findDocuments,
    get,
    codeJWT,
    setCache,
    logger
  }).post({
    params,
    JWTSecret: config.JWT_SECRET,
    dbConfig: config.DB_CONFIG,
    cacheConfig: config.CACHE_CONFIG,
    errorMsgs: errorMsgs.post
  });

export {
  post,
  get
}
