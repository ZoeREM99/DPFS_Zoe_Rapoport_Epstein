var fs = require('fs');
var path = require('path');

// Path to the JSON file
const dataPath = path.join(__dirname, '../db/books.json');

// Helper function to read data from the JSON file
const readData = () => {
    try {
        const data = fs.readFileSync(dataPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data:', error);
        return [];
    }
};

// data = readData();
// console.log(data);


let productsController = {
    list: function(req,res) {
        return res.send('Acá irá el listado de productos');
    },
    detail: function(req,res) {
        // const view = ;
        const data = readData();
        const productId = parseInt(req.params.id);
        let book = data.find((item) => item.id === productId);
        let mightLike = data.filter((item) => item.id !== productId).slice(0, 6);
        // return res.send(mightLike);
        if (book) {
            res.render(`products/productDetail`, { bookFound: true, book, mightLike, stylesheet: 'productDetail', title: `book.title` });
            // res.json(book);
        } else {
            res.status(404).render('products/productDetail', { bookFound: false, stylesheet: 'productDetail', title: 'Error' });
        }
    },
    create: function(req,res) {
        return res.render('products/newProduct', {stylesheet: 'newProduct', title: 'Crear Producto'});
    },
    shoppingCart: function(req,res) {
        res.render("products/shoppingCart", { stylesheet: 'shoppingCart', title: 'Carrito de Compras' });
    },
    redirectProducts: function(req,res) {
        return res.redirect('/products');
    }
}

module.exports = productsController;