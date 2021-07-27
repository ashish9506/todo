const supertest = require('supertest');
const { promisify } = require('util');
const serverUtils = require('../utils/serverUtils');
const delay = promisify(setTimeout);
// eslint-disable-next-line no-undef
before(async () => {
  const app = require('../index');
  global.request = supertest(app);
  global.expect = require('chai').expect;
  try {
    await serverUtils.boot(app);
  } catch (e) {
    console.log(e);
  }
  await delay(1000);
});
// eslint-disable-next-line no-undef
after(() => {
  process.exit(0);
});
