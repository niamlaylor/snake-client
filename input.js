const { stdin } = require("process");
const { movements } = require('./constants');

let connection;

const handleUserInput = (char) => { // This function checks keystrokes and is passed as a callback into stdin.on below in setupInput
  if (char === movements.exit) {
    process.exit();
  }
  if (char === movements.up) { // Type 'w' to move up
    connection.write('Move: up');
  }
  if (char === movements.left) { // Type 'a' to move left
    connection.write('Move: left');
  }
  if (char === movements.down) {
    connection.write('Move: down'); // Type 's' to move down
  }
  if (char === movements.right) {
    connection.write('Move: right'); // Type 'd' to move right
  }
  if (char === movements.hello) { // Type '1' to say 'Hello world' canned message
    connection.write('Say: Hello world!');
  }
  if (char === movements.win) { // Type '2' to say 'I'm going to win!' canned message
    connection.write('Say: I\'m going to win!');
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on('data', handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

module.exports = setupInput;