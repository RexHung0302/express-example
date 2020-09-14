var express = require('express');
var app = express();
var path = require('path');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// 吃靜態檔案
app.use(express.static('public'));

var indexRouter = require('./routes/index'); // 引入 index 的所有路由
var userRouter = require('./routes/user'); // 引入 user 的所有路由

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(3000, function () {
    console.log('Example Nodejs Express listening on port 3000!');
});