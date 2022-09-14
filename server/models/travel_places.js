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
      place_name: DataTypes.STRING(10),
      place_region1: { type: DataTypes.STRING(10), allowNull: false },
      place_region2: { type: DataTypes.STRING(10), allowNull: false },
      place_region3: DataTypes.STRING(35),
      place_description: DataTypes.TEXT,
      issued_place: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      location_keyword: DataTypes.STRING(50),
    },
    {
      sequelize,
      modelName: "Travel_places",
    }
  );
  return Travel_places;
};
