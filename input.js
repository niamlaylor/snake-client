const { stdin } = require("process");

let connection;

const handleUserInput = (char) => { // This function checks keystrokes and is passed as a callback into stdin.on below in setupInput
  if (char === '\u0003') {
    process.exit();
  }
  if (char === '\u0077') { // Type 'w' to move up
    connection.write('Move: up');
  }
  if (char === '\u0061') { // Type 'a' to move left
    connection.write('Move: left');
  }
  if (char === '\u0073') {
    connection.write('Move: down'); // Type 's' to move down
  }
  if (char === '\u0064') {
    connection.write('Move: right'); // Type 'd' to move right
  }
  if (char === '\u0031') { // Type '1' to say 'Hello world' canned message
    connection.write('Say: Hello world!');
  }
  if (char === '\u0032') { // Type '2' to say 'I'm going to win!' canned message
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