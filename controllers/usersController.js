let usersController = {
    list: function(req,res){
        return res.send('Acá irá el listado de usuarios');
    },
    detail: function(req,res){
        return res.send('Acá irá el detalle de un usuario');
    },
    signUp: function(req,res){
        return res.render('users/signUp');
    },
    logIn: function(req,res){
        return res.render('users/logIn');
    },
}

module.exports = usersController;