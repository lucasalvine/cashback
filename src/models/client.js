module.exports = (sequelize, DataTypes) => {
  const Clients = sequelize.define(
    "Clients",
    {
      name: DataTypes.STRING,
      document: DataTypes.STRING,
    },
    {
      sequelize,
    }
  );
  return Clients;
};
