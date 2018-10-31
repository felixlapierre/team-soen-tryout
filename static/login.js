var socket = io();

document.addEventListener('onlick', /* some function*/ , false);

socket.emit('new');

function login(){
    var user = {
        username = document.getElementById("userName").value,
        password = document.getElementById("password").value
    }

    socket.emit('login', user);
}

function gotoFox(){
    window.location.replace("https://cdn.shopify.com/s/files/1/3006/2506/products/cute-fox-1-flawed_580x.jpg?v=1518387559")
}