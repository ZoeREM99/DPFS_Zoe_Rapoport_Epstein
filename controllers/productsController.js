let productsController = {
    list: function(req,res) {
        return res.send('Acá irá el listado de productos');
    },
    detail: function(req,res) {
        return res.render('products/productDetail'+ req.params.id,);
    },
    create: function(req,res) {
        return res.send('Acá irá el formulario de creación de productos');
    },
    shoppingCart: function(req,res) {
        return res.render('products/shoppingCart');
    }
}

module.exports = productsController;