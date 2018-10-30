//Import modules
var express = require('express');
var http = require('http');
var path = require('path');

import bodyParser from "body-parser";
import mongoose from "mongoose";

//Create server
var app = express();
const router = express.Router();
var server = http.Server(app);

//Network configuration
app.set('port', 5000);
app.use('/static', express.static(__dirname + '/static'));
app.use(bodyParser.json());

mongoose.connect(['']);
app.use('/', router);

const connection = mongoose.connection;


app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});

//Start the server
server.listen(5000, function() {
    console.log('Starting server on port 5000');
});