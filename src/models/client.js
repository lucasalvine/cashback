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

  Client.associate = function (models) {
    Client.hasMany(models.Order, { as: "documento_client" });
  };
  return Client;
};
