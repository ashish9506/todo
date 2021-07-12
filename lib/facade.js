class Facade {
  constructor(schema) {
    this.Model = schema;
  }

  findAll(...args) {
    return this.Model.findAll(...args);
  }
  create(...args) {
    return this.Model.create(...args);
  }
  destroy(...args) {
    return this.Model.destroy(...args);
  }
  update(...args) {
    return this.Model.update(...args);
  }
}

module.exports = Facade;
