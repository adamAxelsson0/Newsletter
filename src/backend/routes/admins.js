const express = require('express');
const router = express.Router();
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const usersDir = path.join(__dirname, '../data/Admins.json')

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

module.exports = router;
