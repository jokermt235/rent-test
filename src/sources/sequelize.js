const Sequelize = require('sequelize');
const config  = require('dotenv').config();
// Initialize database connection
const sequelize = new Sequelize(
  config.parsed.MYSQL_DB,
  config.parsed.MYSQL_USER,
  config.parsed.MYSQL_PASSWORD,
  {
    "dialect":"mysql",
    "host": config.parsed.HOST
  }
);
module.exports = sequelize;
