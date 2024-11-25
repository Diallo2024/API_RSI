const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('./user.model');

const InvestmentProduct = sequelize.define('InvestmentProduct', {
  id_product: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  risk: {
    type: DataTypes.ENUM('bajo', 'medio', 'alto'),
    allowNull: false,
  },
  expected_profit: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  available_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = { InvestmentProduct };
