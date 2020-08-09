module.exports = (sequelize, DataTypes) => {
  const Cashback = sequelize.define(
    "Cashback",
    {
      value: DataTypes.STRING,
      percentage: DataTypes.INTEGER,
      due_date: DataTypes.DATE,
    },
    {
      sequelize,
    }
  );

  Cashback.associate = function (models) {
    Cashback.belongsTo(models.Order, {
      foreignKey: "order_id",
      as: "order",
      onDelete: "CASCADE",
    });
  };
  return Cashback;
};
