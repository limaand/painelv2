module.exports = function(application){
	application.get('/painel', function(req, res){
		application.app.controllers.painel.painel(application, req, res);

	});
    
   application.get('/sair', function(req, res){
		application.app.controllers.painel.sair(application, req, res);

	});

  


}