var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'To Do API (MongoDB - Node Js - Express - Mongoose)' });
});

module.exports = router;
