const { FORCE } = require('sequelize/lib/index-hints');
const sequelize = require('../config/db.config'); // Import the Sequelize instance
const { DataTypes } = require('sequelize'); // Import DataTypes separately

const Book = sequelize.define('Books', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

sequelize.sync()
  .then(() => {
    console.log('Table created successfully.');
  })
  .catch((error) => {
    console.error('Unable to create table:', error);
  });

 module.exports = Book;
