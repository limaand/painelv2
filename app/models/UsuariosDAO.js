function UsuariosDAO(connection) {
	this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function (usuario, callback) {
	console.log(usuario);
	this._connection.query('insert into adm set ? ', usuario, callback);

}

UsuariosDAO.prototype.autenticar = function (usuario, req, res) {
	// console.log(usuario);

	this._connection.query("select * from adm where login = ? AND senha = ?", [usuario.login, usuario.senha], function (err, result, fields) {
		//if (err) throw err;
		//    console.log(result);

		if (result[0] != undefined) {
			req.session.autorizado = 'true';
            req.session.login = result[0].login;
            req.session.tipo = result[0].tipo;
		}

		if (req.session.autorizado) {
			res.redirect("painel");
           
		} else {
			res.render("home/index", {validar: {}});
            
		}

	});

}


module.exports = function () {
	return UsuariosDAO;
}
