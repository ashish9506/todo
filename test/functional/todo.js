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
  it('should  be able to get all todo', async () => {
    await request.get('/todo').expect(200);
  });
  //   it("should not be able to get todo by wrong id", function () {
  //     assert.equal([1, 2, 3].indexOf(4), -1);
  //   });
  it('should be able to update todo by id', async () => {
    const id = 1;
    await request
      .put(`/todo/update/${id}`)
      .send({
        todo: 'asddasda'
      })
      .expect(200);
  });
  it('should be able to delete todo by id', async () => {
    const id = 1;
    await request.delete(`/todo/delete/${id}`).expect(200);
  });
  // it('should not be able to update todo with invalid data', async () => {
  //   await request.put(`/todo/update/`).expect(422);
  // });
  //   it("should  be able to get all todo ", function () {
  //     assert.equal([1, 2, 3].indexOf(4), -1);
  //   });
});
