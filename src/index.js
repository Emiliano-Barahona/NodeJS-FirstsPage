//IMPORTACION DE MODULOS

//Se importa express en una constante llamada "express"
const express = require("express");
const morgan = require("morgan");
//Se crea una constante llamada "app" la cual crea un servidor
const app = express();
//Se importa path en una constante llamada "path"
const path = require("path");


//SETINGS

/* Se crea una variable en la cual contenga el puerto donde va a correr, ya sea al que le asigne
el sitio donde se lo vaya a correr (esto sirve para cuando se quiera desplegar la app),
y si no obtiene nada (que es cuando se lo desarrolla) corra en el puerto 3000*/
const port = process.env.PORT || 3000
//Se configura al servidor para que establezca a las vistas como la carpeta views
app.set("views", path.join(__dirname, "views"));
//Se configura al servidor para que a las extensiones html se interpreten como ejs
app.engine("html", require("ejs").renderFile);
//Se usa el motor de plantilla ejs
app.set("view engine", "ejs");

//MIDLEWARES

//Se configura al servidor para que use la función dev de morgan
app.use(morgan("dev"));


//ROUTES

/*La constante app usa mediante el metodo require, los archivos "index" y "contact" de la carpeta "routes",
como sus rutas*/
app.use(require("./routes/index"));


//STATIC FILES

//Se configura al servidor para que declare la carpeta "public" como un archivo estatico
app.use(express.static(path.join(__dirname, "public")))



//LISTENING THE SERVER

//Aqui se le dice al servidor que escuche en el puerto establecido y que imprima por pantalla "Server on port "
app.listen((port), () => {
    console.log("Server on port", port);
});

