//IMPORTACIONES DE LOS MODULOS

//Se crea una constante express que importa express
const express = require("express");
// Se crea una constante "router" que usa le modulo "Router" de express
const router = express.Router();


//CREACION DE RUTAS

//Se crea una ruta que esta conectada al "archivo index.html" de la carpeta "views"
//Su funcion es que cuando se escriba "/" en el buscador se conecte a dicho archivo y ponga como titulo "Pagina Principal"
router.get("/", (req, res) => {
    res.render("index.html", { title: "Pagina Principal"});
});


//Se crea una ruta que esta conectada al archivo "contact.html" de la carpeta "views"
//Su funcion es que cuando se escriba "/" en el buscador se conecte a dicho archivo y ponga como titulo "Pagina de Contacto"
router.get("/contact", (req, res) => {
    res.render("contact.html", { title: "Pagina de Contacto"});
})


//EXPORTACION DE MODULOS

//Se exporta el modulo "router"
module.exports = router;
