"use strict";
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define(
    "Orders",
    {
      code: DataTypes.STRING,
      value: DataTypes.STRING,
      date: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      sequelize,
    }
  );
  return Orders;
};
