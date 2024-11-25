const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');
const { Password } = require('@mui/icons-material');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profil: {
    type: DataTypes.ENUM('medio', 'impulsivo', 'reservado'),
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = { sequelize, User };
