"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Has
      models.User.hasMany(models.Reviews, {
        sourceKey: "id",
        foreignKey: "user_id",
      });
      models.User.hasMany(models.Location_validations, {
        sourceKey: "id",
        foreignKey: "user_id",
      });
      models.User.hasMany(models.Traveled_records, {
        sourceKey: "id",
        foreignKey: "user_id",
      });
      models.User.hasOne(models.Experience, {
        sourceKey: "id",
        foreignKey: "user_id",
      });
      models.User.hasOne(models.Level, {
        sourceKey: "id",
        foreignKey: "user_id",
      });
      models.User.hasOne(models.User_fixedData, {
        sourceKey: "id",
        foreignKey: "user_id",
      });
    }
  }
  User.init(
    {
      account: { type: DataTypes.STRING(20), allowNull: false },
      password: { type: DataTypes.STRING(30), allowNull: false },
      region_1: { type: DataTypes.STRING(50), allowNull: false },
      region_2: { type: DataTypes.STRING(50), allowNull: false },
      user_name: { type: DataTypes.STRING(10), allowNull: false },
      user_phoneNumber: { type: DataTypes.STRING(20), allowNull: false },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
