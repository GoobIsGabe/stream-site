var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongo = require("mongoose");
var config = require('./config');

var db = mongo.connect(config.DATABASE, function(err, response){
    if(err){console.log(err);}
    else{console.log('Connected to ' + db, ' + ', response);}
});

var app = express();
app.use(bodyParser());
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(function (req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'link'); //goobisgabe.com
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var Schema = mongo.Schema;

var RouletteSchema = new Schema({
    Username: { type: String, required: true },
    Result: { type: String, required: true },
    Occurred: { type: Date, required: true },
});