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

app.put('/api/cows/:id', (req, res) => {
  let cow = [req.body.name, req.body.description, req.params.id];
  console.log(cow);
  db.edit(cow, (err, result) => {
    if (!err) {
      console.log('edited a cow')
      res.send(200)
    } else {
      console.log(err)
    }
  })
})

app.delete('/api/cows/:id', (req, res) => {
  console.log('delete request')
  let id = req.params.id;
  console.log('id:', id)
  db.deleteCow(id, (err, result) => {
    if (!err) {
      console.log(result)
      res.send(200)
    } else {
      console.log(err)
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
