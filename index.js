const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('config');
const bunyan = require('bunyan');
const Sequelize = require('sequelize');
const serverUtils = require('./utils/serverUtils');
const app = express();

const bunyanConfig = {
  name: 'TodoApi',
  serializers: {
    req: bunyan.stdSerializers.req,
    res: bunyan.stdSerializers.res,
    err: bunyan.stdSerializers.err
  },
  streams: [
    {
      level: 'info'
    }
  ]
};

/* istanbul ignore else */
if (config.get('isTesting')) {
  bunyanConfig.streams[0].stream = process.stdout;
} else {
  bunyanConfig.streams[0].stream = process.stderr;
}

const dbConfig = config.get('db');
global.dbConn = new Sequelize(dbConfig.database, null, null, dbConfig.setting);
global.log = bunyan.createLogger(bunyanConfig);

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
if (!config.get('isTesting')) {
  app.use(require('express-bunyan-logger')(bunyanConfig));
}

// process.on('uncaughtException', function (err) {
//   console.log('Caught exception: ' + err);
// });

const routes = require('./routes');
app.use('/', routes);

const startApp = () => {
  app.listen(config.get('port'), () => {
    console.log(`Magic happens on port ${config.get('port')}`);
  });
};

if (config.get('isTesting')) {
  startApp();
} else {
  serverUtils.boot(app).then(() => {
    startApp();
  });
}

module.exports = app;
