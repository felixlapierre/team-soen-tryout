var socket = io();

document.addEventListener('onlick', /* some function*/ , false);

socket.emit('new');

function login(){
    console.log("Trying to log in")
    socket.emit('login',{
        username = document.getElementById("userName").value,
        password = document.getElementById("password").value
    } );
}

function gotoFox(){
    window.location.replace("https://cdn.shopify.com/s/files/1/3006/2506/products/cute-fox-1-flawed_580x.jpg?v=1518387559");
}