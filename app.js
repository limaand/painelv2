var app = require('./config/server');


var porta = process.env.PORT || 5000;

app.listen(porta, function(){
   console.log('http://localhost:5000'); 
   console.log('Servidor ON');
});