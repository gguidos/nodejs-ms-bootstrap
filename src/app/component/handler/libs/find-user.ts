export default function createFindUser({ logger }) {
  return Object.freeze({ findUser })
  function findUser(){
    logger.info('[FIND USER] Process started');

    return { data: 'hello world' };
  }
}