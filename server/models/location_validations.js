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
      user_id: { type: DataTypes.BIGINT, allowNull: false },
      geo_x: { type: DataTypes.STRING(20), allowNull: false },
      geo_y: { type: DataTypes.STRING(20), allowNull: false },
      location_address: DataTypes.STRING(30),
      validated: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Location_validations",
    }
  );
  return Location_validations;
};
