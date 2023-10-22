export default function createGet({
  makeInputObj,
  findDocuments,
  logger
}) {
  return Object.freeze({ get })
  
  async function get({ params, dbConfig, errorMsgs }){
    console.log(params)
    logger.info(`[USE-CASE][GET] Reading from db - START!`);
    Object.keys(params).forEach(key => params[key] === undefined && delete params[key])

    if (Object.values(params).length) {
      const userFactory = makeInputObj({ params });
      params = { 
        username: !params.username ? undefined : userFactory.username(),
        email: !params.email ? undefined : userFactory.email()
      };
      Object.keys(params).forEach(key => params[key] === undefined && delete params[key])
    }
    
    const fileContent = await findDocuments({ query: params, dbConfig });

    return  fileContent
  }
}