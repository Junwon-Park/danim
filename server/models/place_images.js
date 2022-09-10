"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Place_images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Belongs
      models.Place_images.belongsTo(models.Travel_places, {
        foreignKey: "place_id",
        targetKey: "id",
      });
    }
  }
  Place_images.init(
    {
      place_id: { type: DataTypes.BIGINT, allowNull: false },
      place_image: DataTypes.STRING(100),
    },
    {
      sequelize,
      modelName: "Place_images",
    }
  );
  return Place_images;
};
