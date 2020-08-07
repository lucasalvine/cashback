module.exports = (sequelize, DataTypes) => {
  const Cashback = sequelize.define(
    "Cashback",
    {
      value: DataTypes.STRING,
    },
    {
      sequelize,
    }
  );
  return Cashback;
};
