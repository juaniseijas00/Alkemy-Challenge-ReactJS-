const { Sequelize, DataTypes } = require("sequelize");

module.exports = model;
function model(sequelize) {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };

  const options = {
    timestamps: false,
  };

  return sequelize.define("Exchange_Type", attributes, options);
}
