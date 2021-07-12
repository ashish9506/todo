const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const Todo = sequelize.define(
  "Todo",
  {
    // Model attributes are defined here
    todo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  },
  {
    // Other model options go here
  }
);
module.exports = Todo;
sequelize.sync({ force: true });
