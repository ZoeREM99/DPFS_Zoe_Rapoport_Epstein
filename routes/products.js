let express = require('express');
let router = express.Router();

let productsController = require('../controllers/productsController');

//Routes
router.get('/', productsController.list);
router.get('/id', productsController.redirectProducts)
router.get('/id/:id', productsController.detail);
router.get('/newProduct', productsController.create);
router.get('/shoppingCart', productsController.shoppingCart);

module.exports = router;