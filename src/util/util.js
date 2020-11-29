const _ = require('lodash');
export const parse = (inComingMessage) => {
  const body = inComingMessage.body;
  if (!body) {
    return;
  }
  // console.log(body);
  return body;
};

export const reject = (err) => {
  const message = _.get(err, 'response.body.message');
  throw Error(message);
};