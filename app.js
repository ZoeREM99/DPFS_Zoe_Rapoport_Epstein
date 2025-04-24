// Importar Express
var express = require('express');
var path = require('path');

// Importar routers
var homeRouter = require('./routes/home');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

// Importar middlewares


// Inicializar la aplicación Express
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));        

// ROUTES
app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

// Middlewares


// Definir el puerto para el servidor
var PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});