import {
  setCache as makeSetCache,
  getCache as makeGetCache
} from '../../initializers/redis-cache';
import redisCache from './redis.cache';

const setCache = ({ data, cacheKey, cacheConfig }) =>
  redisCache({ makeSetCache }).setCache({ data, cacheKey, cacheConfig });

const getCache = ({ cacheKey, cacheConfig }) =>
  redisCache({ makeGetCache }).getCache({ cacheKey, cacheConfig });


export {
  setCache,
  getCache
}
