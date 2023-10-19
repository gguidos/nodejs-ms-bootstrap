import createPost from './post';
import createGetCached from './get';
import config from '../../config';
import { logger } from '../../libs/logger';
import { makeInputObj } from '../entities';
import {
  insertDocument,
  findDocuments,
  setCache,
  getCache
} from '../data-access';
import { insertOneDocument } from '../../libs/mongodb';

const get = ({ params }) =>
  createGetCached({
    getCache,
    logger
  }).get({
    params,
    cacheConfig: config.REDIS_CONFIG,
    errorMessage: config.ERROR_MSG.get
  })


const post = ({ params }) =>
  createPost({
    makeInputObj,
    findDocuments,
    insertDocument,
    setCache,
    logger
  }).post({
    params,
    dbConfig: config.DB_CONFIG,
    cacheConfig: config.REDIS_CONFIG,
    errorMsgs: config.ERROR_MSG.post
  });

export {
  post,
  get
}
