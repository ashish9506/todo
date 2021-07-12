const Facade = require('../../lib/facade');
const todoSchema = require('./schema');

class TodoFacade extends Facade {}

module.exports = new TodoFacade(todoSchema);
