var express = require('express');
var router = express.Router();
const registroController = require("../controllers/registroController")

/* GET home page. */
router.get("/", registroController.showRegistro)
router.get('/registro', registroController.showRegistro);
router.post("/registro",registroController.registro);

// GET login page
router.get("/login",registroController.showLogin);
router.post("/login",registroController.login)

module.exports = router;
