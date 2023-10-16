export default function makeInputObjectFactory({ md5, sanitize }) {
  return Object.freeze({ inputObj })
  
  function inputObj({ params, errorMsgs }){
    try { 
      const {
        username,
        password,
        created = Date.now(),
        modified = Date.now()
      } = params;

      return Object.freeze({
        username: () => checkUsername({ username }),
        password: () => checkPassword({ password }),
        created: () => created,
        modified: () => modified
      })
    } 
    catch (e) {
      throw e
    }
  }

  function checkUsername({ username }) {
    checkRequiredParam({ param: username, paramName: 'username' })
    username = sanitize(username);
    return username;
  }

  function checkPassword({ password }) {
    checkRequiredParam({ param: password, paramName: 'password' });
    password = sanitize(password);
    password = hash({ param: password });
    return password;
  }
  
  function hash({ param }) {
    return md5(param);
  }

  function checkRequiredParam({ param, paramName }) {
    if (!param || param === '')
      throw new Error(`Missing required parameter: ${paramName}`)
    return;
   }
}