
const sequelize = require('../config/db.config'); 
const { DataTypes } = require('sequelize'); 

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
