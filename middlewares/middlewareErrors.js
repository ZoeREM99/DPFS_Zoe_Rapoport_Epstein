let middlewareErrors = {
    manejarErrorVista: function(err, req, res, next) {
        if (err.message === 'Vista no encontrada') {
            res.status(404).send('Producto no encontrado')
        //   res.status(404).render('error', { mensaje: 'El producto solicitado no existe' });
        } else {
          next(err);
        }
    }
}


  
module.exports = middlewareErrors;