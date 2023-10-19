import createPost from './post';
import config from '../../config';
import { logger } from '../../libs/logger';
import { makeInputObj } from '../entities';
import { insertDocument, findDocuments } from '../data-access';
import { insertOneDocument } from '../../libs/mongodb';

const post = ({ params }) =>
  createPost({
    makeInputObj,
    insertDocument,
    findDocuments,
    logger
  }).post({
    params,
    dbConfig: config.DB_CONFIG,
    errorMsgs: config.ERROR_MSG.post
  });

export {
  post
}
