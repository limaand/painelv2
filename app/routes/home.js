module.exports = (application) =>{

   application.get('/', (req,res) =>{
       application.app.controllers.home.index(application, req, res);
   });

    application.get('/index', (req,res) =>{
       application.app.controllers.home.index(application, req, res);
   });

     application.post('/autenticar', (req,res) =>{
       application.app.controllers.home.autenticar(application, req, res);
   });

}