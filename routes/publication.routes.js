const router = require("express").Router();
const Publications = require("../models/Publications");
const mongoose = require("mongoose");


//get
router.get("/", (req, res) => {
    Publications.find().then( todasLasPublicaciones =>{
            console.log("xxxxxxxxx",todasLasPublicaciones)
            res.json(todasLasPublicaciones)
    }).catch(console.log)
})

//post
router.post("/post-new", (req, res) => {
    const { name, description, image } = req.body
    Publications.create({ name, description, image })
    .then(newPublication =>{
        res.json(newPublication)
    }).catch(console.log)
})

//pendiente de probar en Postman
//put
router.put("/edit/:Id", (req, res) =>{
    const { Id } = req.params
    Publications.findByIdAndUpdate(Id, req.body)
    .then(newEdit =>{
        res.json(newEdit)
    }).catch(console.log)
})//pendiente

//delete
router.delete("/delete/:Id", (req, res) =>{
    const { Id } = req.params
    Publications.findByIdAndDelete(Id)
    .then(deletePublication =>{
        res.json(deletePublication)
    }).catch(console.log)
})//pendiente


module.exports = router