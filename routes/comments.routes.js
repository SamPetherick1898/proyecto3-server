const router = require("express").Router();
const Comments = require("../models/Comments");
const mongoose = require("mongoose");

//get

router.get("/", (req, res) =>{
    Comments.find()
    .then( todosLosComentarios =>{
        console.log("xxxxxxxxx", todosLosComentarios)
        res.json(todosLosComentarios)
    }).catch(console.log)
})

//post

router.post("/post-new", (req, res) =>{
    const { name, comment } = req.body
    Comments.create({ name, comment })
    .then(newComment =>{
        res.json(newComment)
    }).catch(console.log)
})

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
    Comments.findByIdAndDelete(Id)
    .then(deletePublication =>{
        res.json(deletePublication)
    }).catch(console.log)
})


module.exports = router