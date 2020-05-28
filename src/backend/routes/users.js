const express = require('express');
const router = express.Router();
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const usersDir = path.join(__dirname, '../data/Users.json')

router.use(cors());

router.get('/', (req, res, next) => {
  console.log(usersDir)

  fs.readFile(usersDir, (err, data) => {
    if (err) throw err;

    let users = JSON.parse(data);
    console.log(users)

    res.send(users);
  })
});

router.get('/:id', function (req, res, next) {
  res.send(`<h1>You are visiting user id: ${req.params.id}</h1>`);
});

router.post('/', (req, res, next) => {
  console.log(req.body)
  res.send(`Received a post with the following body: ...`);
});

router.put('/:id', (req, res) => {
  console.log(req.params.id)
  return res.send(`Received a put on ID: ${req.params.id}`);
});

router.delete('/api/users/:id', (req, res) => {
  console.log(req.params.id)
  return res.send(`Received a delete on ID: ${req.params.id}`);
});

module.exports = router;
