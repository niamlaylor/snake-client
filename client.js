const net = require('net');
const { IP, PORT, connectedSuccess, playerName } = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // this event handler console logs data from the server
  conn.on('data', (data) => {
    console.log('Incoming message: ', data);
  });

  // this event handler prints a confirmation as soon as we connect to the game server
  conn.on('connect', () => {
    console.log(connectedSuccess);
    conn.write(`Name: ${playerName}`);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  return conn;
};

module.exports = connect;

/*
Moves:
Note
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)
*/

/* This callback will keep moving it in a certain direction until it hits a wall (add to the conn.on('connect') function)
setInterval(() => {
  conn.write('Move: up');
}, 50)
*/