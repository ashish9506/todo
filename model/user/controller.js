// const Controller = require('../../lib/controller')
const userFacade = require("./facade");

class UserController {
  async findAll(req, res) {
    const users = await userFacade.findAll();
    res.send(users);
  }
  async create(req, res) {
    const user = await userFacade.create(req.body);
    res.send(user);
  }
  async destroy(req, res) {
    await userFacade.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.send("Success");
  }
}

module.exports = new UserController(userFacade);
