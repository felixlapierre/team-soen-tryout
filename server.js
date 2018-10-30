//Import modules
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

//Create server
var app = express();
var server = http.Server(app);
var io = socketIO(server);

//Network configuration
app.set('port', 5000);
app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});

//Start the server
server.listen(5000, function() {
    console.log('Starting server on port 5000');
});

var clients = {};

//Add WebSocket handlers
io.on('connection', function(socket) {

    socket.on('new', function() {
        clients[socket.id] = {
            logged:false
        };
    });

    socket.on('login', function(data) {
        var username = data.username;
        var passwordHashed = data.password;
    });
});