"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Travel_places extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Has
      models.Travel_places.hasMany(models.Traveled_records, {
        sourceKey: "id",
        foreignKey: "place_id",
      });
      models.Travel_places.hasMany(models.Place_images, {
        sourceKey: "id",
        foreignKey: "place_id",
      });
      models.Travel_places.hasMany(models.Local_specialties, {
        sourceKey: "id",
        foreignKey: "place_id",
      });
    }
  }
  Travel_places.init(
    {
      place_name: DataTypes.STRING,
      place_region1: DataTypes.STRING,
      place_region2: DataTypes.STRING,
      place_region3: DataTypes.STRING,
      issued_place: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Travel_places",
    }
  );
  return Travel_places;
};
