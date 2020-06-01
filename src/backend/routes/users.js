const express = require('express');
const router = express.Router();
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const cryptoJS = require('crypto-js');

const usersDir = path.join(__dirname, '../data/Users.json')

router.use(cors());

router.get('/', (req, res, next) => {
  console.log(usersDir)

  fs.readFile(usersDir, (err, data) => {
    if (err) throw err;
    let users = JSON.parse(data);
    users.forEach(element => {
      var bytes = cryptoJS.AES.decrypt(element.password, 'Saltkey');
      element.password = bytes.toString(cryptoJS.enc.Utf8);
    });

    res.send(users);
  })
});

router.get('/:id', function (req, res, next) {

  fs.readFile("./data/Users.json", (err, data) => {
    if (err) throw err;
    var users = JSON.parse(data);

    var user = users.find(x => x.id == req.params.id)
    if (user) {
      var bytes = cryptoJS.AES.decrypt(user.password, 'Saltkey');
      user.password = bytes.toString(cryptoJS.enc.Utf8);
      res.send(JSON.stringify(user, null, 2));
    }
    else {
      res.send(400, `Could not find ID: ${req.params.id}`);
    }
  });
});

router.post('/', (req, res, next) => {

  fs.readFile("./data/Users.json", (err, data) => {
    if (err) throw err;

    var users = JSON.parse(data);
    req.body.id = users.length + 1;

    //Encrypting password
    req.body.password = cryptoJS.AES.encrypt(req.body.password, 'Saltkey').toString();

    users.push(req.body);

    fs.writeFile("./data/Users.json", JSON.stringify(users, null, 2), (err) => {
      if (err) throw err;
    });
    res.send(JSON.stringify(req.body, null, 2));
  });
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
