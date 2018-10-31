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
clients = {};
clients['Felix'] = {
    password: "password"
}
connected = {};

io.on('connection', function(socket) {
    socket.on('new', function() {
        connected[socket.id] = {
            logged:false
        }
    });

    socket.on('login', function(data) {
        var loginValid = false;
        if(clients[data.username] != undefined && clients[data.username].password == data.password)
        {
            loginValid = true;
        }
        if(loginValid)
        {
            console.log("login success");
            connected[socket.id].logged = true;
            connected[socket.id].username = data.username;
            io.to(socket.id).emit('link', '/static/account.html');
        }
    })
});