const router = require("express").Router();
const Books = require("../models/books");
const mongoose = require("mongoose");

//get
router.get("/", (req, res) => {
    Books.find()
    .then( todosLosLibros =>{
        console.log("xxxxxxxxx",todosLosLibros)
         res.json(todosLosLibros)
    }).catch(console.log)
})

//post
router.route('/post-book').post((req, res, next) => {
  Books.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

//put
router.put("/edit/:Id", (req, res) =>{
    const { Id } = req.params
    Comments.findByIdAndUpdate(Id, req.body)
    .then(newEdit =>{
        res.json(newEdit)
    }).catch(console.log)
})

//delete
router.delete("/delete/:Id", (req, res) =>{
  const { Id } = req.params
  Books.findByIdAndDelete(Id)
  .then(deleteBooks =>{
      res.json(deleteBooks)
  }).catch(console.log)
})

module.exports = router