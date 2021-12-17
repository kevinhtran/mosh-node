const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/user', (req, res) => {
  console.log(req);
  res.send(`<h1>hello User</h1>`);
});

app.get('/user/:userId/:userName', (req, res) => {
  console.log(req);7
  res.send(`<h1>${req.params.userId}</h1><p>${req.params.userName}</p>`);
});

app.get('/user/:userId', (req, res) => {
  console.log(req);
  res.send(`<h1>${req.params.userId}</h1>`);
});

app.post('/user', (req, res) => {
  console.log(req.body);
  res.send(`<h1>${req.body.name}</h1>`);
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
