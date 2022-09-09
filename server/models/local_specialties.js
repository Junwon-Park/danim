"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Local_specialties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Has
      models.Local_specialties.hasMany(models.Sellers, {
        sourceKey: "id",
        foreignKey: "specialty_id",
      });
      models.Local_specialties.hasMany(models.specialty_images, {
        sourceKey: "id",
        foreignKey: "specialty_id",
      });

      // Belongs
      models.Local_specialties.belongsTo(models.Travel_places, {
        foreignKey: "place_id",
        targetKey: "id",
      });
    }
  }
  Local_specialties.init(
    {
      place_id: DataTypes.INTEGER,
      specialty_name: DataTypes.STRING,
      specialty_description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Local_specialties",
    }
  );
  return Local_specialties;
};
