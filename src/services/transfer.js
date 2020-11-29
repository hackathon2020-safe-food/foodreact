import { parse } from '../util/util';
const request = require('superagent');
export const transferGet = (url) => {
  return request.get(url).then(parse);
}

export const transferValueGet = (url, value) => {
  return request.get(url).send(value).then(parse);
}

export const transferPost = (url) => {
  return request.post(url).then(parse);
}

export const transferValuePost = (url, value) => {
  return request.post(url).send(value).then(parse);
}