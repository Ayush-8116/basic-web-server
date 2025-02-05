// code for the Express.js server
require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('This is the about page')
})
app.get('/youtube', (req, res) => {
    res.send('<h2>This is the youtube page </h2>')
})
app.get('/contact', (req, res) => {
    res.send('<h2>This is the contact page </h2>')
})
console.log('Environment Variables:', process.env);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})