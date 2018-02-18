module.exports.index = function(application, req, res){
    res.render("home/index", {validar: {}});
}

module.exports.autenticar = function(application, req, res){
    var dadosForm =  req.body;

    req.assert('login', 'campo usuário não pode ser vazio').notEmpty();
    req.assert('senha', 'campo senha não pode ser vazia').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render("home/index", {validar : erros});
        return;
    }
    
    var connection = application.config.dbConnection;
    var usuariosModel = new application.app.models.UsuariosDAO(connection);
    
    usuariosModel.autenticar(dadosForm, req, res);
    
   // res.send('tudo ok para criar a session!!!')


}
