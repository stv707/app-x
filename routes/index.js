var express = require('express');
var router = express.Router();
// const myhost = require('os');
var os = require('os');

var networkInterfaces = os.networkInterfaces();
var myhost = os.hostname(); 
var cpuc = cpuCount = os.cpus().length;
var fmem = os.freemem();
var tmem = os.totalmem();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'DO180 Demo WebApp - v1rc', menuId:'home', sakura: myhost , mazda: cpuc , honda: fmem, bmw: tmem  });
});

router.get('/express', function(req, res, next) {
  res.render('express', {page:'About us', menuId:'about'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact Steve', menuId:'contact'});
});

module.exports = router;
