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
      place_id: { type: DataTypes.BIGINT, allowNull: false },
      specialty_name: { type: DataTypes.STRING(20), allowNull: false },
      specialty_description: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      modelName: "Local_specialties",
    }
  );
  return Local_specialties;
};
