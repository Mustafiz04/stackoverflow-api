const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
import mysql2 from 'mysql2';

const config = require('./index');

dotenv.config();

const sequelize = new Sequelize(config.DB.DATABASE, config.DB.USERNAME, config.DB.PASSWORD, {
  dialect: 'mysql',
  dialectModule: mysql2,
  host: config.DB.HOST,
  port: config.DB.PORT,
  dialectOptions: {
    connectTimeout: 30000,
    timeout: 10000,
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 30000,
  },
});

module.exports = sequelize;
