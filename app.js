// Importar Express
var express = require('express');

var homeRouter = require('./routes/home');
// var usersRouter = require('./routes/users');

// Inicializar la aplicación Express
var app = express();

// view engine setup
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));        

app.use('/', homeRouter);

// Definir el puerto para el servidor
var PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});