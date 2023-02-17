const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer1}`);
  rl.question('Do you have any pets? ', (answer2) => {
    console.log (`You should get more pets: ${answer2}`);
    rl.question ("Why do you exist? ", (answer3) => {
      console.log (`Ok: ${answer3}`)
      rl.close(); //make sure to not place in lower brackets
    })
  })
});