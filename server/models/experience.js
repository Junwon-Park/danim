"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Belongs
      models.Experience.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
      });
    }
  }
  Experience.init(
    {
      user_id: { type: DataTypes.BIGINT, allowNull: false },
      user_exp: {
        type: DataTypes.INTEGER(5),
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Experience",
    }
  );
  return Experience;
};
