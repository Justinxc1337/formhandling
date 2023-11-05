var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next){
  if ((req.body.username == 'Jens') && (req.body.password == 'Gut')) {
    res.send('logget ind ' + req.body.username + " " + req.body.password);
  }
  else {
    res.send('forkert username eller password');
  }
});

module.exports = router;
