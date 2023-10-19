export default function createGetCached({ getCache, logger }) {
  return Object.freeze({ get })
  
  async function get({ params, cacheConfig }){
    try {
      logger.info(`[USE-CASE][GET] Reading from cache - START!`);
      const cacheKey = cacheConfig.cacheKeyPrefix + params.hash;
      const fileContent = await getCache({ cacheKey, cacheConfig });
      logger.info(`[USE-CASE][GET] Reading from cache - DONE!`);
      return JSON.parse(fileContent);
    } catch (e) {
      throw e
    }
  }
}