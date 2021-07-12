const { Sequelize } = require('sequelize');

const schema = {
  id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, allowNull: false, primaryKey: true },
  todo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  done: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: false
  },
  createdAt: { type: Sequelize.DATE, allowNull: false },
  updatedAt: { type: Sequelize.DATE, allowNull: false }
};

const Todo = dbConn.define('Todo', schema, {
  freezeTableName: true
});

module.exports = Todo;
