var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");
var urlEncodedParser = bodyParser.urlencoded({extended:true});
// creating express server
var server = express();

// creating jsonParser from bodyparser
var jsonParser = bodyParser.json();

// using route of express
var route = express.Router();

route.use(express.static('../'));

// enable CROSS-ORIGIN RESOURCE SHARING -- cross domain requests
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// enable bodyparsers
server.use(jsonParser);
server.use(urlEncodedParser);

// default route
route.get('/',function(request,response){
     response.send("<h2>This is a sample server . Please provide the specific url</h2>");
    //response.sendFile('./client/index.html',{root:"./"});
});

var mates = ["nikhil","heerak","rao","ketan"]; 

// get all the flatmates
route.get('/all',function(request,response){
        response.send(mates);
});


route.post('/add',jsonParser,function(request,response){
    if(!request.body){
        response.sendStatus(400);
    }
    //console.log(request.body);
    mates.push(request.body.name);
    response.send(mates);
})

// express server use route
server.use(route);  

// creating web server using http 
var webserver = http.createServer(server);

// port to listen
webserver.listen(4000,function(){
    console.log("server is lietening at port : 4000");
});