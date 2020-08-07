"use strict";
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      code: DataTypes.STRING,
      value: DataTypes.STRING,
      date: DataTypes.DATE,
      document: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
    }
  );
  return Order;
};
