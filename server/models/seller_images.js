"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Seller_images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Belongs
      models.Seller_images.belongsTo(models.Sellers, {
        foreignKey: "seller_id",
        targetKey: "id",
      });
    }
  }
  Seller_images.init(
    {
      seller_id: { type: DataTypes.BIGINT, allowNull: false },
      product_image: DataTypes.STRING(20),
    },
    {
      sequelize,
      modelName: "Seller_images",
    }
  );
  return Seller_images;
};
