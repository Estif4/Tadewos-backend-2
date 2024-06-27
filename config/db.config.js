const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'Library', 
  'root',           
  '4235',          
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;
