const { expect } = require('chai');

describe('TODO', function () {
  it('should be able to create a todo', async () => {
    const res = await request
      .post('/todo')
      .send({
        todo: 'ajsdhajksd'
      })
      .expect(200);
    expect(res.body.todo).to.equal('ajsdhajksd');
  });
  it('should not be able to create todo with invalid data', async () => {
    await request.post('/todo').expect(422);
  });
  //   it("should be able to get todo by id", function () {
  //     assert.equal([1, 2, 3].indexOf(4), -1);
  //   });
  //   it("should not be able to get todo by wrong id", function () {
  //     assert.equal([1, 2, 3].indexOf(4), -1);
  //   });
  //   it("should be able to update todo by id", function () {
  //     assert.equal([1, 2, 3].indexOf(4), -1);
  //   });
  //   it("should not be able to update todo with invalid data", function () {
  //     assert.equal([1, 2, 3].indexOf(4), -1);
  //   });
  //   it("should  be able to get all todo ", function () {
  //     assert.equal([1, 2, 3].indexOf(4), -1);
  //   });
});
