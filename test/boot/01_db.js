const config = require('config');
const Promise = require('bluebird');
const _ = require('lodash');
const Umzug = require('umzug');
const Sequelize = require('sequelize');

module.exports = () =>
  new Promise(async (resolve, reject) => {
    const dbConfig = config.get('db');
    const conn = dbConn;
    const dropQuery = `DROP DATABASE  \`${dbConfig.database}\``;
    const createQuery = `CREATE DATABASE \`${dbConfig.database}\``;
    const selectQuery = `USE  \`${dbConfig.database}\``;

    try {
      await conn.query(dropQuery);
      await conn.query(createQuery);
      await conn.query(selectQuery);
    } catch (e) {
      reject(e);
    }

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
      console.log('res');
      resolve();
    }, 2000);

    // resolve();
  });
