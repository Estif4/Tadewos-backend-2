const express = require('express');
const bcrypt = require('bcrypt');
const model = require('../model/book');

const createBook = async(req, res) => {
    const { id, name, author, price, password } = req.body; 

    
    const salt= await bcrypt.genSalt(10);
        
         
            const hashedPassword=  await bcrypt.hash(password, salt);
        
        
         
            const newBook= model.create({
                id: id,
                name: name,
                author: author,
                price: price,
                password: hashedPassword // Store the hashed password
        
        })
        .then(newBook => {
            
            res.status(201).json(newBook);
        })
        .catch(error => {
            console.error('Error creating book:', error);
            res.status(500).json({ error: 'Unable to create book' });
        });
};
const getOneBook = (req, res) => {
    const id = req.query.id;
    

    model.findOne({ where: { id: id } })
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({ message: "Book not found" });
            }
        })
        .catch((error) => {
            console.error("Error occurred:", error);
            res.status(500).send({ message: "Error happened" });
        });
};



const getBook = (req, res) => {
    model.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.error('Error fetching books:', err);
            res.status(500).json({ error: 'Unable to fetch books' });
        });
}

const updateBook=(req,res)=>{
  const id = req.params.id;
  
  model.update(req.body, {where: {id:id}})
  .then((updateData)=>{
    res.send(updateData)
    console.log(updateData)
  })
  .catch((err)=>{
    console.log(err)
    res.status(500).json({error: "Unable to update book"})
  })
}
const deleteBook = (req, res) => {
  const id = req.params.id;
  model.destroy({ where: { id: id } })
      .then((data) => {
          if (data === 1) {
              res.send(`Book with ID ${id} was deleted successfully`);
          } else {
              res.status(404).send(`No book found with the ID of ${id}`);
          }
      })
      .catch((err) => {
          console.log(err);
          res.status(500).json({ error: "Unable to delete book" });
      });
};



module.exports = {
    createBook,
    getBook,
    updateBook,
    deleteBook,
    getOneBook
};
