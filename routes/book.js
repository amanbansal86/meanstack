var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  //res.send('Express RESTful API');
  console.log("testa");
next();

});

router.get('/tt', function(req, res, next) {
  //res.send('Express RESTful API');
  console.log("testavv");
res.json({a:"sss" })
});

module.exports = router;