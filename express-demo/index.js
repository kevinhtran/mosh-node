const express = require('express');
const app = express();

app.use(express.json());

app.get('/about', (req, res) => {
  res.send('about page');
});

app.post('/about', (req, res) => {
  console.log(req);
  res.send(JSON.stringify(req.body));
});

app.listen(3000, () => console.log('Server is live'));
