var mysql = require('mysql'); 

var connMySQL = function(){
    console.log('conexao com BD estabelecida');
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'portalnode'
    });
}

module.exports = function(){
    return connMySQL;
}
