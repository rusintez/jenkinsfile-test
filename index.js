/**
 * 
 */

const express = require('express');

const app = express();

app.get('/', (req,res) => {
  res.end('hello world');
});

exports = module.exports = app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});