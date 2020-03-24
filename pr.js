const readline = require('readline');

let k = process.argv[2];
k = parseInt(k);

let n = process.argv[3];
n = parseInt(n);

var s = 0;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let count = 0;

rl.on('line', line => {
  s = line;
  for (var i = 0; i < 4 ; i++){
    line *= s;
  }
  console.log(line)
  count++;
  console.log(count)
  if (count === n) {
    rl.close();
  }
})
