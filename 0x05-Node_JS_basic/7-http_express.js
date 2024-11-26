const express = require('express');

const countStudents = require('./3-read_file_async');
const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  let txt = 'This is the list of our students\n';
  await countStudents(process.argv[2])
    .then((msg) => {
      txt += msg;
      res.send(txt);
    })
    .catch((err) => {
      txt += err.message;
      res.end(txt);
    });
});
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

module.exports = app;
