const express = require('express');
const sequelize = require('./config/db.config.js');
const dotenv = require('dotenv').config();
const bookRouter = require('./route/book.route');

const app = express();
const port = process.env.PORT || 3000; 


app.use(express.json()); 


app.use('/', bookRouter);

// sequelize.authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
   
//   })
//   .catch((error) => {
//     console.error('Unable to connect to the database:', error);
//   });


// Start the server
app.listen(port, () => {
  console.log(`The server is starting on port ${port}`);
});
