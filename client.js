const net = require('net');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.0.23',
    port: '50541'
  });

  // this event handler console logs data from the server
  conn.on('data', (data) => {
    console.log('Incoming message: ', data);
  });

  // this event handler prints a confirmation as soon as we conect to the game server
  conn.on('connect', () => {
    console.log('Successfully connected to the game server!');
    conn.write('Name: LNN')
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  return conn;
};

module.exports = connect;