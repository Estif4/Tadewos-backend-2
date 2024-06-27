const express = require('express');
const router = express.Router();
const controller = require('../controller/bookcontroller');

// Define route for creating a book
router.post("/createbook", controller.createBook);
router.get("/getallBook", controller.getBook);
router.put("/updatebook/:id",controller.updateBook);
router.delete("/deletebook/:id",controller.deleteBook)
module.exports = router;
