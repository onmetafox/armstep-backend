import jwt from 'jsonwebtoken';
import config from '../configs/config';

const expiresIn = '10d';
const expiresInObject = { frequency: 10, interval: 'days' };

const generate = (data, callback) => {
  if (config.jwtSecret) {
    return jwt.sign(data, config.jwtSecret, { expiresIn }, (err, token) => {
      callback(err, token, expiresInObject);
    });
  }
  return callback(new Error('Internal Error'), null);
};

const verify = (token, callback) => {
  if (config.jwtSecret) {
    return jwt.verify(token, config.jwtSecret, (err, user) => callback(err, user, expiresInObject));
  }
  return callback(new Error('Internal Error'), null);
};

export default {
  generate,
  verify
}
