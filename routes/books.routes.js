const router = require("express").Router()
const Books = require("../models/Books")

router.get("/", (req, res) => {
    Books.find().then( todosLosLibros =>{
            console.log("xxxxxxxxx",todosLosLibros)
            res.json("books")
    }).catch(console.log)
})

//CREATE
router.route('/create-book').post((req, res, next) => {
  Books.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

//Update

//Edit

/*
router.get("/r", async (req, res, next) =>{
  const details = await Drink.findById(req.params.id)
  const details2 = await Pastry.findById(req.params.id)
  let oc
  if(details){
    oc = { ...details._doc}
  } else if (details2){
    oc = { ...details2._doc}
  }
  res.render("id", oc)
})*/

//Delete


module.exports = router


/* 

  //Store in mongo db
    let type = req.body.type;
    if(type === "pastel" || type === "nieve"){
        Pastry.create(req.body)
        .then(newPastry => {
        console.log(newPastry)
        res.redirect("/pastries")
        }).catch(console.log("Error creating new pastry"))
    } else {
        Drink.create(req.body)
        .then(newDrink => {
          console.log(newDrink)
          res.redirect("/drinks")
        }).catch(console.log("Error creating new drink"))
    }
})

//Edit


router.post("/update/:id", async (req, res) =>{
  const updateD = req.body
  let type = req.body.type;
  const paramsId = req.params.id
  if(type === "pastel" || type === "nieve"){
    await Pastry.findByIdAndUpdate(paramsId, updateD)
    res.redirect("/pastries")
  } else{
    await Drink.findByIdAndUpdate(paramsId, updateD)
    res.redirect("/drinks")
  }
})


router.get("/delete/:id", async (req, res, next) =>{
  try{
    const { id } = req.params
    if(await Drink.findById(id)){
    await Drink.findByIdAndRemove(id)
    res.redirect("/drinks")} 
    else if(await Pastry.findById(id)){
      await Pastry.findByIdAndRemove(id)
      res.redirect("/pastries")
    }
  } catch { console.log }
})


  module.exports = router


*/