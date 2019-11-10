var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var gameRouter = require('./routes/game');
var userRouter = require('./routes/user');
var userManageRouter = require('./routes/user_manage');
var publishRouter = require('./routes/publish');
var orderRouter = require('./routes/order');
var footmarkRouter = require('./routes/footmark');
var concernRouter = require('./routes/concern');
var searchRouter = require('./routes/search')
const JwtUtil = require('./common/jwt');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/public/images/*', function (req, res) {
  console.log(req.url)
  res.sendFile( __dirname + "/" + req.url );
  console.log("Request for " + req.url + " received.");
})


app.use(function(req, res, next) {
  console.log(req.url)
  // 我这里知识把登陆和注册请求去掉了，其他的多有请求都需要进行token校验 
  if (req.url.includes('Manage') && req.url != '/userManage/login') {
      let token = req.headers.token;
      let jwt = new JwtUtil(token);
      let result = jwt.verifyToken();
      // 如果考验通过就next，否则就返回登陆信息不正确
      if (result == 'err') {
          console.log(result);
          res.send({code: 403, msg: '登录已过期,请重新登录'});
      } else {
          next();
      }
  } else {
      next();
  }
});

app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/user', userRouter);
app.use('/userManage', userManageRouter);
app.use('/publish', publishRouter);
app.use('/order', orderRouter);
app.use('/footmark', footmarkRouter);
app.use('/concern', concernRouter);
app.use('/search', searchRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
