var socket = io();

socket.emit('new');

function login(){
    console.log("Trying to log in");
    socket.emit('login',{
        username : document.getElementById("userName").value,
        password : document.getElementById("password").value
    } );
}

socket.on("link", function(url){
    console.log(url);
    window.location.replace(url);
});
