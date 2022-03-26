const db = require('../database')
const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json())

app.get('/api/cows', (req, res) => {
  db.getCows((err, result) => {
    if (!err) {
      console.log(result);
      res.send(result);
    }
  })
})

app.post('/api/cows', (req, res) => {
  let cow = [req.body.name, req.body.description];
  console.log('cow: ', cow)
  db.create(cow, (err, result) => {
    if(!err) {
      console.log(result)
      res.send(201)
    } else {
      console.log(err)
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
