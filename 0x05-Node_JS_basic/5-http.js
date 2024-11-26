const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    let txt = 'This is the list of our students\n';
    try {
      const msg = await countStudents(process.argv[2]);
      txt += msg;
    } catch (err) {
      txt += err.message;
    }
    res.end(txt);
  }
});
app.listen(port);

module.exports = app;
