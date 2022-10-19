// Server info
const IP = '192.168.0.23';
const PORT = '50541';

// Success/information messaging
const connectedSuccess = 'Successfully connected to the game server!'; // Success message when successful connection to game server
const playerName = 'LNN'

// Movement keys
const movements = {
  exit: '\u0003',
  up: '\u0077',
  left: '\u0061',
  down: '\u0073',
  right: '\u0064',
  hello: '\u0031',
  win: '\u0032'
};

module.exports = {
  IP,
  PORT,
  connectedSuccess,
  playerName,
  movements
};