import createPost from './post';
import createGet from './get';
import config from '../../config';
import { logger } from '../../libs/logger';
import { makeInputObj } from '../entities';
import {
  checkDir,
  writeToFile,
  readFromFile
} from '../data-access';

const fileDirName = config.FILE_FOLDER_NAME;
const fileDirPath = config.FILE_FOLDER_PATH;
const filename = config.FILE_DB_NAME;
const filePath = config.FILE_DB_PATH;
const errorMsgs = config.ERROR_MSG.post;

const post = ({ params }) =>
  createPost({
    makeInputObj,
    checkDir,
    writeToFile,
    readFromFile,
    logger
  }).post({
    params,
    filename,
    fileDirPath,
    fileDirName,
    filePath,
    errorMsgs
  });

export {
  post,
  get
}
