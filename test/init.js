const supertest = require("supertest");
const { promisify } = require("util");
const delay = promisify(setTimeout);
before(async () => {
  const app = require("../index.js");
  global.request = supertest(app);
  global.expect = require('chai').expect;
  await delay(1000);
});
after(() => {
  process.exit(0);
});
