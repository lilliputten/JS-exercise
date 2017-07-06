// import 'babel-polyfill'; // eslint-disable-line

import { get, post } from 'hexlet-http-request'; // eslint-disable-line

const getToken = body => body.match(/value="(\w+)"/)[1];

// BEGIN (write your solution here)
export default async (registrationFormUrl, submitFormUrl, nickname) => {
  const reqget = await get(registrationFormUrl);
  if (reqget.status !== 200) {
    return new Error(`GET request statusCode = ${reqget.status}`);
  }
  const data = { nickname, 'token': getToken(reqget.data) };
  const reqpost = await post(submitFormUrl, data);
  if (reqpost.status !== 302) {
    return new Error(`POST request statusCode = ${reqpost.status}`);
  }
  return null;
};
// END