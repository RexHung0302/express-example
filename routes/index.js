var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
    response.render('index');
});

router.get('/detail', function(request, response){
    response.send('This is detail page!');
});

module.exports = router;