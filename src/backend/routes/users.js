var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('<h1>respond with a resource</h1>');
});

router.get('/:id', function(req, res, next) {
  res.send(`<h1>You are visiting user id: ${req.params.id}</h1>`);
});

module.exports = router;
