export default function createPost({
  makeInputObj,
  findDocuments,
  insertDocument,
  setCache,
  logger,
}) {
  return Object.freeze({ post });
  
  async function post({
    params,
    dbConfig,
    cacheConfig,
    errorMsgs
  }){
    let user;
    
    logger.info('[POST][USE-CASE] Inserting object process - START!');
    const userFactory = makeInputObj({ params });

    user = {
      username: userFactory.username(),
      password: userFactory.password(),
      email: userFactory.email(),
      hash: userFactory.hash(),
      created: userFactory.created(),
      modified: userFactory.modified()
    }
    
    let query = { hash: user.hash }
    const checkDuplicate = await findDocuments({ query, dbConfig })
    if (checkDuplicate.length) throw new Error(errorMsgs.EXISTING_USER);
    
    await insertDocument({ document: user, dbConfig });
    logger.info('[POST][USE-CASE] Inserting object process - DONE!');
    
    const inserted = await findDocuments({ query, dbConfig })
    
    setCache({
      data: user,
      cacheKey: cacheConfig.cacheKeyPrefix + user.hash,
      cacheConfig
    });
    
    return user;
  }
  
}
