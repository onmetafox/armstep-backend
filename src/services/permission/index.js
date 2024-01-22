
import Emitter from 'events';
import activities from './activity';
import roles from './role';

const emitter = new Emitter();


emitter.on('Authorization By Activity Request', activities);

emitter.on('Authorization By Role Request', roles);

const can = (activity, route) => {
  return (req, res, next) => emitter.emit('Authorization By Activity Request', activity, route, req, res, next);
}

const is = (role) => {
  return (req, res, next) => emitter.emit('Authorization By Role Request', role, req, res, next);
}

export default {
  can,
  is
};
