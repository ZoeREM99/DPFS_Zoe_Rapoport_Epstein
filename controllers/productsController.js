var fs = require('fs');
var path = require('path');

let productsController = {
    list: function(req,res) {
        return res.send('Acá irá el listado de productos');
    },
    detail: function(req,res,next) {
        const view = 'products/productDetail' + req.params.id;
        const viewPath = path.join(__dirname, '../views', `${view}.ejs`);

        fs.access(viewPath, fs.constants.F_OK, (err) => {
            if (err) {
            console.error('Error al acceder a la vista:', err);
            next(new Error('Vista no encontrada'));
            } else {
            res.render(view);
            }
        });
    },
    create: function(req,res) {
        return res.render('products/newProduct');
    },
    shoppingCart: function(req,res) {
        return res.render('products/shoppingCart');
    },
    redirectProducts: function(req,res) {
        return res.redirect('/products');
    }
}

module.exports = productsController;