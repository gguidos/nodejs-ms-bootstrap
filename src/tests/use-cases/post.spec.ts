/* istanbul ignore file */
require('dotenv').config();
import { rm, readFile } from 'node:fs/promises';
const expect = require('chai').expect;
import * as path from 'path';
import config from '../config';
import { logger } from '../../app/libs/logger';
import { makeInputObj } from '../../app/component/entities';
import {
  checkDir,
  readFromFile,
  writeToFile
} from '../../app/component/data-access';
import createPost from '../../app/component/use-cases/post';

const post = ({ params }) => 
  createPost({
    makeInputObj,
    checkDir,
    readFromFile,
    writeToFile,
    logger
  })
  .post({
    params,
    filename: config.FILE_DB_NAME,
    fileDirPath: config.FILE_FOLDER_PATH,
    fileDirName: config.FILE_FOLDER_NAME,
    filePath: config.FILE_DB_PATH,
    errorMsgs: config.ERROR_MSG.post
  });

describe('Post', () => {
  after(() => rm(config.FILE_FOLDER_PATH, { recursive: true }))

  it('should insert a user', async () => {
		const params = {
      username: config.TEST_DATA.user1.username,
      password: config.TEST_DATA.user1.password
    }
    const results = await post({ params });
    const fileContent = await readFile(config.FILE_DB_PATH);
    const users = JSON.parse(fileContent)
    expect(results).to.have.property('username').equal(params.username);
    expect(users.length).to.equal(1);
    expect(users[0]).to.have.property('username').equal(params.username);
	});

  it('should not insert an empty user', async () => {
		const params = {
      username: undefined,
      password: undefined
    }
    try {
      let results = await post({ params });
    } catch (err) {
      expect(err.message).to.equal(`${ config.ERROR_MSG.post.MISSING_PARAMETER }username`);
    }
	});

  it('should not insert an existing user', async () => {
		const params = {
      username: config.TEST_DATA.user1.username,
      password: config.TEST_DATA.user1.password
    }
    try {
      let results = await post({ params });
    } catch (err) {
      expect(err.message).to.equal(config.ERROR_MSG.post.EXISTING_USER);
    }
	});

  it('should insert another user', async () => {
		const params = {
      username: config.TEST_DATA.user2.username,
      password: config.TEST_DATA.user2.password
    }
    await post({ params });
    const results = await readFile(config.FILE_DB_PATH, { encoding: 'utf8' })
    expect(Object.keys(JSON.parse(results)).length).to.equal(2)
	});
})
