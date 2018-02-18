var mysql = require('mysql'); 

var connMySQL = function(){
    console.log('conexao com BD estabelecida');
    return mysql.createConnection({
        /*host:'localhost',
        user:'root',
        password:'',
        database:'portalnode'*/

        host:'novaimagem1.mysql.dbaas.com.br',
        user:'novaimagem1',
        password:'heroku1020',
        database:'novaimagem1'
    });
}

module.exports = function(){
    return connMySQL;
}
