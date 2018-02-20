var express = require("express");
var consign = require("consign");
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");
var expressSession = require("express-session");
var path = require("path");


var app = express();

app.set('view engine', 'ejs');
//app.set('views', './app/views');

app.set('views', path.join(__dirname, '../app/views'));


/*midleware*/
app.use(express.static(path.join(__dirname,'../app/public')));

app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());

app.use(expressSession({
   secret:'wewewewttydgghjgj',
   resave: false, 
   saveUninitialized: false
}));

/* todas as rotas*/
consign({cwd: process.cwd() + "/app"})
  .include('routes').into(app)
  .then('../config/dbConnection.js')
  .then('models')
  .then('controllers')
  .into(app);

module.exports = app;