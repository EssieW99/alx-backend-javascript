// set encoding for stdin to 'utf-8' to receive string input
process.stdin.setEncoding('utf-8');

console.log('Welcome to Holberton School, what is your name?');

// listen for the 'data' event
process.stdin.on('data', (data) => {
  if (data !== null) {
    console.log(`Your name is: ${data.trim()}`);
  }
});

// listen for 'end' event
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
