// set encoding for stdin to 'utf-8' to receive string input
process.stdin.setEncoding('utf-8');

const isInteractive = process.stdin.isTTY;

process.stdout.write('Welcome to Holberton School, what is your name?\n');
// listen for the 'data' event
process.stdin.on('data', (data) => {
  if (data !== null) {
    process.stdout.write(`Your name is: ${data.trim()}\n`);
    process.exit();
  }
});

process.stdin.on('end', () => {
  if (!isInteractive) {
    process.stdout.write('This important software is now closing\n');
  }
});
