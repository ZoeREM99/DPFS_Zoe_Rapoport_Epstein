let express = require('express');
let router = express.Router();

let usersController = require('../controllers/usersController');

//Routes
router.get('/', usersController.list);
router.get('/id/:id', usersController.detail);
router.get('/SignUp', usersController.signUp);
router.get('/logIn', usersController.logIn);

module.exports = router;