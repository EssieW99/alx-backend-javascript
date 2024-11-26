const express = require('express');
const port = 1245;
const app = express();

app.get('/', (req, rees) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`The server is running at ${port}`);
});

module.exports = app;
