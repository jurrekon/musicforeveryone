/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var accounts = [{firstname:"admin",lastname:"admin",username:"admin",password:"admin"}, {firstname:"Jurre",lastname:"Kon",username:"jurrekon",password:"kaas"},{firstname:"Deona",lastname:"Secreve",username:"tasninta",password:"kat"}];

var data = [];

var stateKey = 'spotify_auth_state';
var app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/test', function(req,res){
  console.log(data);
  res.writeHead(200, {"Content-Type": "application/json"});
  res.write(JSON.stringify({"status":"succes"}));
  res.end();
});

app.post("/post",function(req,res){
  console.log(req + "  res: "+ res);
  console.log(req.body);
  data.push(req.body);
  res.writeHead(200, {"Content-Type": "application/json"});
  res.write(JSON.stringify({"status":"succes"}));
  res.end();
})

app.post("/register",function(req,res){
    console.log(req.body);
    accounts.push(req.body);  
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify({"status":"succes"}));
    res.end();   
});

app.post("/login",function(req,res){
    var succes = false;
    var keepgoing = true;
    accounts.forEach(function(currentValue, index){
        if(keepgoing){
            if(currentValue.username == req.body.username && currentValue.password == req.body.password){
                succes = true;
                keepgoing = false;
            }
        }
    });
    if(succes){
        console.log(req.body);
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify({"status":"succes"}));
        res.end();
    }
    else{
        console.log(req.body);
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify({"status":"failed"}));
        res.end();
    }
});

console.log('Listening on 4100');
app.listen(4100);
