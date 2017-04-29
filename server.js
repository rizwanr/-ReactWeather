var express = require('express'); //now we have access to the entire epress api

//Create our App
var app = express();
//tell it which folder we are going to serve
app.use(express.static('public')); /*express. use =lets u add fucntionality to express application
express.static is going to specify the folder name that we want to expose to the web server*/

app.listen(3000, function(){

console.log('Express server is up on port 3000');

}); // start the server; takes in two arguements, 
              //port number and the function that is going to be called once the server is up
