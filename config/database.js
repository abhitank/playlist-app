const Sequelize = require('sequelize');

module.exports = new Sequelize('abhishek', 'postgres', 'admin@123', {
  host: 'localhost',
  dialect: 'postgres',
});
