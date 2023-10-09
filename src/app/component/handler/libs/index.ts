import createFindUser from './find-user';

const logger = require('../../../libs/logger');

const findUser = () => createFindUser({ logger }).findUser();

export {
  findUser
}