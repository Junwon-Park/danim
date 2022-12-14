"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Belongs
      models.Level.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
      });
    }
  }
  Level.init(
    {
      user_id: { type: DataTypes.BIGINT, allowNull: false },
      user_level: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Level",
    }
  );
  return Level;
};
