var express = require('express');
var router = express.Router();
// const myhost = require('os');
var os = require('os');

var networkInterfaces = os.networkInterfaces();
var myhost = os.hostname(); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Steve Azure Demo Page', menuId:'home', sakura: myhost , mazda: networkInterfaces });
});

router.get('/about', function(req, res, next) {
  res.render('about', {page:'About us', menuId:'about'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact us', menuId:'contact'});
});

module.exports = router;
