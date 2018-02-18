var app = require('./config/server');


var porta = process.env.PORT || 8080;

app.listen(porta, function(){
  // console.log('http://localhost:3000'); 
  // console.log('Servidor ON');
});