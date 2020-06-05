const express = require('express');
const router = express.Router();
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const cryptoJS = require('crypto-js');

const usersDir = path.join(__dirname, '../data/Users.json')

router.use(cors());

//TODO SHOULD ONLY BE ACCESSIBLE BY ADMIN SINCE PASSWORDS GET DECRYPTED
router.get('/', (req, res, next) => {
  console.log(usersDir)
  try {
    fs.readFile(usersDir, (err, data) => {
      if (err) throw err;
      let users = JSON.parse(data);
      users.forEach(element => {
        var bytes = cryptoJS.AES.decrypt(element.password, 'Saltkey');
        element.password = bytes.toString(cryptoJS.enc.Utf8);
      });
      return res.send(users);
    })
  } catch (error) {
    return res.send(400, `ERROR`);
  }
});

router.post('/login', function (req, res, next) {
  try {
    fs.readFile("./data/Users.json", (err, data) => {
      if (err) throw err;
      var users = JSON.parse(data);

      var user = users.find(x => x.username == req.body.username)

      if (user) {
        var bytes = cryptoJS.AES.decrypt(user.password, 'Saltkey');
        user.password = bytes.toString(cryptoJS.enc.Utf8);

        if (user.password == req.body.password) {
          res.send(JSON.stringify(user, null, 2));
        }
        else {
          res.send(400, `Wrong password for: ${req.body.username}`);
        }
      }
      else {
        res.send(400, `Could not find ID: ${req.body.username}`);
      }
    });
  } catch (error) {
    throw error;
  }
});

router.post('/', (req, res, next) => {

  fs.readFile("./data/Users.json", (err, data) => {
    if (err) throw err;

    var users = JSON.parse(data);
    //Is always sorted in ID order, even when doing a put.
    var lastIndexUser = users[users.length-1]
    req.body.id = lastIndexUser.id + 1;

    //Encrypting password
    req.body.password = cryptoJS.AES.encrypt(req.body.password, 'Saltkey').toString();

    users.push(req.body);

    fs.writeFile("./data/Users.json", JSON.stringify(users, null, 2), (err) => {
      if (err) throw err;
    });
    return res.send(JSON.stringify(req.body, null, 2));
  });
});

router.put('/', (req, res, next) => {
  try {
    fs.readFile("./data/Users.json", (err, data) => {

      if (err) throw err;
      var users = JSON.parse(data);

      if(!users.find(x => x.id == req.body.id)){
        return res.send(400, `Could not find ID: ${req.body.id}`);
      }
      //Remove old one
      users = users.filter(x => x.id != req.body.id);
      //Add new one
      users.push(req.body);
      //Sort them by ID for eye candy.
      users = users.sort((x, y) => parseFloat(x.id) - parseFloat(y.id));

      fs.writeFile("./data/Users.json", JSON.stringify(users, null, 2), (err) => {
        if (err) throw err;
      });
      return res.send(JSON.stringify(req.body, null, 2));
    });

  } catch (error) {
    return res.send(400, `Something went wrong`);
  }
});

module.exports = router;
