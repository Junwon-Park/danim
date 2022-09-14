"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Specialty_images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Belongs
      models.Specialty_images.belongsTo(models.Local_specialties, {
        foreignKey: "specialty_id",
        targetKey: "id",
      });
    }
  }
  Specialty_images.init(
    {
      specialty_id: { type: DataTypes.BIGINT, allowNull: false },
      specialty_image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Specialty_images",
    }
  );
  return Specialty_images;
};
