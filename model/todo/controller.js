const todoFacade = require('./facade');

class TodoController {
  async findAll(req, res) {
    const todoList = await todoFacade.findAll();
    res.send(todoList);
  }

  async create(req, res) {
    const todo = await todoFacade.create(req.body);
    res.send(todo);
  }

  async destroy(req, res) {
    await todoFacade.destroy({
      where: {
        id: req.params.id
      }
    });

    res.send('Success');
  }

  async update(req, res) {
    await todoFacade.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    const todo = await todoFacade.findAll({
      where: {
        id: req.params.id
      }
    });

    res.send(todo[0]);
  }
}

module.exports = new TodoController(todoFacade);
