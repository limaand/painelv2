module.exports.painel = function(application, req, res){
    
     if (req.session.autorizado){
         res.render('control/painel');
     }else{
         res.send('Usuário precisa fazer login');
     }

}


module.exports.sair = function(application, req, res){
    
    req.session.destroy (function(err){
        res.render('home/index', {validar:{}});
    });

}