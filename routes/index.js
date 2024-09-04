var express = require('express');
var router = express.Router();
// const myhost = require('os');
var os = require('os');

var networkInterfaces = os.networkInterfaces();
var myhost = os.hostname(); 
var cpuc = cpuCount = os.cpus().length;
var fmem = os.freemem();
var tmem = os.totalmem();

var paget = process.env.PAGET || 'AzureAZ104 | WebAPP Appx:v1';
var pageh = process.env.PAGEH || 'AzureAZ104 | WebAPP Appx:v1';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page: paget, menuId:'home', sakura: myhost , mazda: cpuc , honda: fmem, bmw: tmem, header: pageh  });
});

router.get('/express', function(req, res, next) {
  res.render('express', {page:'About us', menuId:'about', header: pageh });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact Steve', menuId:'contact', header: pageh });
});

module.exports = router;
