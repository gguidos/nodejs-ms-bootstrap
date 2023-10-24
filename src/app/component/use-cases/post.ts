export default function createPost({
  makeInputObj,
  findDocuments,
  insertDocument,
  get,
  codeJWT,
  setCache,
  logger,
}) {
  return Object.freeze({ post });
  
  async function post({
    params,
    dbConfig,
    cacheConfig,
    JWTSecret,
    errorMsgs
  }){
    let user;
    logger.info('[POST][USE-CASE] Inserting object process - START!');
    const userFactory = makeInputObj({ params });

    user = {
      username: userFactory.username(),
      password: userFactory.password(),
      email: userFactory.email(),
      role: userFactory.role(),
      usernameHash: userFactory.usernameHash(),
      emailHash: userFactory.emailHash(),
      usernamePasswordHash: userFactory.usernamePasswordHash(),
      created: userFactory.created(),
      modified: userFactory.modified()
    }
      
    // 'or' query
    let query = { $or: [{ username: user.username }, { email: user.email }] }
    const checkDuplicate = await findDocuments({ query, dbConfig })
    if (checkDuplicate.length) throw new Error(errorMsgs.EXISTING_USER);
    
    await insertDocument({ document: user, dbConfig });
    logger.info('[POST][USE-CASE] Inserting object process - DONE!');
    
    const inserted = await get({ params: { username: user.username }});

    const token = codeJWT({ data: { userCode: user.usernamePasswordHash }, secret: JWTSecret });

    const results = {
      data: inserted,
      token 
    }

    setCache({ 
      data: [{ usernameHash: user.usernameHash }],
      cacheKey: cacheConfig.cacheKeyPrefix + token, cacheConfig 
    });

    return results;
  }
}
