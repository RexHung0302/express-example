var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
    response.render('user',{
        'username': '大雄',
        'age': 18
    });
});

router.get('/user-edit', function(request, response){
    // 假設到資料庫拿到資料了
    var user_arr = [
        { username: '胖虎', age: 20 },
        { username: '小夫', age: 22 },
        { username: '靜香', age: 16 },
        { username: '多拉A夢', age: 100 },
    ]
    response.render('user-edit',{
        'user_arr': user_arr,
        'show': true
    });
});

module.exports = router;