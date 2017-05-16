var express = require('express'); //now we have access to the entire epress api

//Create our App
var app = express();
const PORT  = process.env.PORT || 3000;
//tell it which folder we are going to serve

app.use(function(req,res,next){
if(req.headers['x-forwarded-proto'] === 'https'){
  res.redirect('http://' + req.hostname + req.url);
}else {
   next();
}
});


app.use(express.static('public')); /*express. use =lets u add fucntionality to express application
express.static is going to specify the folder name that we want to expose to the web server*/


app.listen(PORT, function(){

console.log('Express server is up on port'+ PORT);

}); // start the server; takes in two arguements,
              //port number and the function that is going to be called once the server is up
