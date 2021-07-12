module.exports = {
  db: {
    username: 'root',
    password: 'pendrive',
    database: 'todo_testing',
    setting: {
      host: 'localhost',
      dialect: 'mysql',
      pool: {
        max: 1000,
        min: 0,
        idle: 10000,
        acquire: 10000
      },
      dialectOptions: {
        supportBigNumbers: true,
        bigNumberStrings: true,
        multipleStatements: true
      },
      replication: {
        read: [{ host: 'localhost', username: 'root', password: 'pendrive' }],
        write: { host: 'localhost', username: 'root', password: 'pendrive' }
      },
      logging: true
    }
  },
  port: 3000,
  isTesting: true
};
