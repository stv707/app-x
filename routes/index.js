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
<<<<<<< HEAD
  res.render('index', {page:'Azure | Redhat Default WebApp - steven.com.my', menuId:'home', sakura: myhost , mazda: cpuc , honda: fmem, bmw: tmem  });
=======
  res.render('index', {page:'DO180 Demo WebApp - v1rc', menuId:'home', sakura: myhost , mazda: cpuc , honda: fmem, bmw: tmem  });
>>>>>>> 014abeead282698d9b6cd27c8866b3fcf7692e56
});

router.get('/express', function(req, res, next) {
  res.render('express', {page:'About us', menuId:'about'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact Steve', menuId:'contact'});
});

module.exports = router;
