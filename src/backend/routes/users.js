var express = require('express');
var router = express.Router();
var cors = require('cors');

router.use(cors());

router.get('/', function(req, res, next) {
  res.send('<h1>respond with a users resource</h1>');
});

router.get('/:id', function(req, res, next) {
  res.send(`<h1>You are visiting user id: ${req.params.id}</h1>`);
});

router.post('/', (req,res)=>{
  console.log(req.body)
  res.send(`Received a post with the following body: ...`);
});

router.put('/:id', (req,res)=>{
  console.log(req.params.id)
  return res.send(`Received a put on ID: ${req.params.id}`);
});

router.delete('/api/users/:id', (req,res)=>{
  console.log(req.params.id)
  return res.send(`Received a delete on ID: ${req.params.id}`);
});

module.exports = router;
