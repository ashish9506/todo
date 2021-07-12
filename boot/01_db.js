const Umzug = require('umzug');
const Sequelize = require('sequelize');
const _ = require('lodash');
const Promise = require('bluebird');

module.exports = () =>
  new Promise(async (resolve, reject) => {
    log.info('Boot script - Resolving db init');
    const conn = dbConn;

    const umzug = new Umzug({
      migrations: {
        params: [conn.getQueryInterface(), Sequelize],
        path: `${process.cwd()}/migrations`,
        pattern: /^\d+[\w-]+\.js$/
      },
      storage: 'sequelize',
      storageOptions: {
        sequelize: conn
      }
    });

    let migrations = await umzug.pending();
    migrations = _.map(migrations, 'file');

    log.info('Boot script - Resolving db migrations');
    try {
      await umzug.execute({
        migrations,
        method: 'up'
      });
    } catch (e) {
      return reject(e);
    }

    log.info('Boot script - Resolving db migrations finished');

    setTimeout(() => {
      resolve();
    }, 2000);
  });
