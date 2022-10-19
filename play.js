const net = require('net');
const connect = require('./client');
const setupInput = require('./input');

console.log('Connecting ...');

setupInput(connect()); // connect function lives in the client.js file for simplicity