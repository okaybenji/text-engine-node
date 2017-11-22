const loadDisk = require('text-engine');
const unlimitedAdventure = require('./unlimited-adventure');

let input, runCmd;

const config = {
  getInput: () => input,
  setInput: (str) => {},
  println: (str, isImg = false) => {
    console.log(str);
  },
  setup: ({applyInput}) => {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (str) => {
      input = str.replace('\n', ''); // Remove line breaks.
      applyInput();
    });
  }
};

loadDisk(unlimitedAdventure, config);
