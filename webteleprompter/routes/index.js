var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EoZ WebTelePrompter', layout: 'base' });
});

// router.get('about', function(req, res, next){
//     res.render('/about', {title: 'About WTP', layout: 'base'});
// });

module.exports = router;
