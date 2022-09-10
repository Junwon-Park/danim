"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_fixedData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Belongs
      models.User_fixedData.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
      });
    }
  }
  User_fixedData.init(
    {
      user_id: { type: DataTypes.BIGINT, allowNull: false },
      user_age: { type: DataTypes.STRING(5), allowNull: false },
      user_sex: { type: DataTypes.STRING(5), allowNull: false },
      user_mbti: { type: DataTypes.STRING(10), allowNull: false },
    },
    {
      sequelize,
      modelName: "User_fixedData",
    }
  );
  return User_fixedData;
};
