export default function createPost({
  makeInputObj,
  checkDir,
  readFromFile,
  writeToFile,
  logger,
}) {
  return Object.freeze({ post });
  
  async function post({ params, filename, fileDirPath, fileDirName, filePath, errorMsgs}){
    let user;
    try {
      logger.info('[POST][USE-CASE] Inserting object process - START!');
      const userFactory = makeInputObj({ params });

      user = {
        username: userFactory.username(),
        password: userFactory.password(),
        created: userFactory.created(),
        modified: userFactory.modified()
      }

      await checkDir({ fileDirPath, fileDirName })
      const content = await readFromFile({ filePath, filename});
      const duplicate = content.filter(el => el.username === user.username);

      if (duplicate.length) throw new Error(errorMsgs.EXISTING_USER);
      content.push(user);
      await writeToFile({ content, filePath, filename });
      logger.info('[POST][USE-CASE] Inserting object process - DONE!');
      return user;
    } catch (e){
      logger.info('[POST][USE-CASE] Inserting object process - DONE!');
      throw e
    }
  }
}
