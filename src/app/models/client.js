module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define(
    "Client",
    {
      name: DataTypes.STRING,
      document: DataTypes.STRING,
    },
    {
      sequelize,
    }
  );

  return Client;
};
