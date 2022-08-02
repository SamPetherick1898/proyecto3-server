const router = require("express").Router();
const authRoutes = require("./auth.routes");
const BooksRoutes = require("./books.routes")
const PublicationsRoutes = require("./publication.routes")
const CommentsRoutes = require("./comments.routes")

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("Historiador Samuel Ignacio Magaña Fuentes");
});

router.use("/auth", authRoutes);
router.use("/libros", BooksRoutes);
router.use("/publications", PublicationsRoutes);
router.use("/comments", CommentsRoutes);

module.exports = router;


//Debemos crear una hoja en la carpeta routes [_/]
//Formulario controlado: el valu