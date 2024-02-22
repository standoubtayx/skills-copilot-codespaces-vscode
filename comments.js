// create web server
const express = require('express');
const app = express();
// create a server
const server = require('http').createServer(app);
// create a socket
const io = require('socket.io')(server);
// create a port
const port = 3000;
// create a path
const path = require('path');
// create a public path
const publicPath = path.join(__dirname, 'public');
// create a middleware
app.use(express.static(publicPath));

// create a js function that filters and returns even numbers from a given array
function evenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}