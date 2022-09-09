"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Location_validations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Belongs
      models.Location_validations.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
      });
    }
  }
  Location_validations.init(
    {
      user_id: DataTypes.INTEGER,
      geo_x: DataTypes.STRING,
      geo_y: DataTypes.STRING,
      location_address: DataTypes.STRING,
      location_keyword: DataTypes.STRING,
      validated: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Location_validations",
    }
  );
  return Location_validations;
};
