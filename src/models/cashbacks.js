module.exports = (sequelize, DataTypes) => {
  const Cashbacks = sequelize.define(
    "Cashbacks",
    {
      value: DataTypes.STRING,
    },
    {
      sequelize,
    }
  );
  return Cashbacks;
};
