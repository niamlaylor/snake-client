const net = require('net');
const connect = require('./client');
const setupInput = require('./input');

console.log('Connecting ...');

connect(); // This function lives in the client.js file for simplicity

setupInput();
