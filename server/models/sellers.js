"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sellers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Has
      models.Sellers.hasMany(models.Seller_images, {
        sourceKey: "id",
        foreignKey: "seller_id",
      });

      // Belongs
      models.Sellers.belongsTo(models.Local_specialties, {
        foreignKey: "specialty_id",
        targetKey: "id",
      });
    }
  }
  Sellers.init(
    {
      specialty_id: DataTypes.INTEGER,
      seller_mutual: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      sales_url: DataTypes.STRING,
      seller_address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Sellers",
    }
  );
  return Sellers;
};
