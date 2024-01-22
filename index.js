import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan'
import cookieParser from 'cookie-parser';
import compress from 'compression';
import methodOverride from 'method-override';
import expressValidation from 'express-validation';
import httpStatus from 'http-status';
import expressWinston from 'express-winston';
import mongoose from 'mongoose';
import debug from 'debug';
import util from 'util';
import helmet from 'helmet';
import winstonInstance from './src/configs/winston';
import routes from './src/routes/index.route';
import config from './src/configs/config';
import APIError from './src/utils/APIError';

import passport from './src/configs/passport';
// import swaggerSpec from '../server/docs/swagger.js';
// import fs from 'fs';
// import swaggerUi from 'swagger-ui-express';
// import path from 'path';
const port = 5000;

const mongoUri = config.mongo.host;
mongoose.connect(mongoUri);
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

// print mongoose logs in dev env
if (config.MONGOOSE_DEBUG) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
  });
}
// const routePath = './src/docs/routes/*.json';

const app = express();

if (config.env === 'development') {
  app.use(logger('dev'));
}

// parse body params and attache them to req.body
app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}));

app.use(passport.initialize());

app.use(cookieParser());
app.use(compress());
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

let origin = '*';

// CORS middleware
const allowCrossDomain = function (req, res, next) {
  const allowedOrigins = [
    // 'https://domain',
    // 'https://www.domain',
    // 'http://localhost:3000',
    // 'http://192.168.107.183:3000'
    "*"
  ];
  origin = req.headers.origin;

  if (allowedOrigins.indexOf(origin) > -1) {
    origin = req.headers.origin;
  } else {
    origin = '*';
  }

  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Access-Control-Allow-Headers, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  next();
};

app.use(allowCrossDomain);

app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    const headers = {};
    // IE8 does not allow domains to be specified, just the *
    // headers["Access-Control-Allow-Origin"] = req.headers.origin;
    headers['Access-Control-Allow-Origin'] = origin;
    // headers["Access-Control-Allow-Origin"] = "*";
    headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE';
    headers['Access-Control-Allow-Credentials'] = true;
    headers['Access-Control-Allow-Headers'] = 'Content-Type, X-Requested-With, Access-Control-Allow-Headers, Authorization';
    headers['Cache-Control'] = 'private, no-cache, no-store, must-revalidate';
    res.writeHead(200, headers);
    res.end();
  } else {
    return next();
  }
});

app.use(cookieParser());

// enable detailed API logging in dev env
if (config.env === 'development') {
  expressWinston.requestWhitelist.push('body');
  expressWinston.responseWhitelist.push('body');
  app.use(expressWinston.logger({
    winstonInstance,
    meta: true, // optional: log meta data about request (defaults to true)
    msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
    colorStatus: true // Color the status code (default green, 3XX cyan, 4XX yellow, 5XX red).
  }));
}

// glob.sync(routePath).forEach(function (file) {
//   let JSONLoaded = require('../.' + file);
//   swaggerSpec.paths = {
//     ...swaggerSpec.paths,
//     ...JSONLoaded.paths
//   };
//   swaggerSpec.components.schemas = {
//     ...swaggerSpec.components.schemas,
//     ...JSONLoaded.schemas
//   };
// });

// let data = JSON.stringify(swaggerSpec);
// fs.writeFileSync('api-docs.json', data);
// app.use(
//   '/api-docs',
//   swaggerUi.serve,
//   swaggerUi.setup(swaggerSpec)
// );

// mount all routes on /api path
app.use('/api', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new APIError('API not found', httpStatus.NOT_FOUND);
  return next(err);
});
// if error is not an instanceOf APIError, convert it.
app.use((err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    var details = [];
    err.details.body.forEach(el => {
      details.push(el.message);
    });
    res.status(err.statusCode).json({
      message: err.isPublic ? err.message : httpStatus[err.statusCode],
      detail: details,
      stack: config.env === 'development' ? err.stack : {}
    })
  } else if (!err instanceof APIError) {
    const apiError = new APIError(err.message, err.status, err.isPublic);
    return next(apiError);
  }
  return next(err);
});
app.use((err, req, res, next) =>{
  console.log(err);
  res.status(err.status).json({
    message: err.isPublic ? err.message : httpStatus[err.status],
    stack: config.env === 'development' ? err.stack : {}
  })
});


// log error in winston transports except when executing test suite
if (config.env !== 'test') {
  app.use(expressWinston.errorLogger({
    winstonInstance
  }));
}

app.listen(port, ()=>{
  console.log(`Server started port number is ${port}`)
})

export default app;
