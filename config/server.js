var express = require("express");
var consign = require("consign");
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");
var expressSession = require("express-session");
var path = require("path");


var app = express();

app.set('view engine', 'ejs');
//app.set('views', './app/views');

app.set('views', path.join(__dirname, 'views'));

/*midleware*/
//app.use(express.static('./app/public'));
app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());

app.use(expressSession({
   secret:'wewewewttydgghjgj',
   resave: false, 
   saveUninitialized: false
}));

/* todas as rotas*/
//consign()
consign ({cwd:process.cwd()+"/app"})
  .include('app/routes').into(app)
  .then('config/dbConnection.js')
  .then('app/models')
  .then('app/controllers')
  .into(app);

module.exports = app;