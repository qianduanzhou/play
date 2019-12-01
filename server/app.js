const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const JwtUtil = require('./common/jwt');

//  客户端
const indexRouter = require('./routes/client/index');
const gameRouter = require('./routes/client/game');
const userRouter = require('./routes/client/user');
const publishRouter = require('./routes/client/publish');
const orderRouter = require('./routes/client/order');
const footmarkRouter = require('./routes/client/footmark');
const concernRouter = require('./routes/client/concern');
const searchRouter = require('./routes/client/search')
const reportRouter = require('./routes/client/report')


//  后台
const userManageRouter = require('./routes/server/user_manage');
const customerManageRouter = require('./routes/server/customer_manage');
const gameManageRouter = require('./routes/server/game_manage');
const orderManageRouter = require('./routes/server/order_manage');
const reportManageRouter = require('./routes/server/report_manage');

//  公用
const upload = require('./routes/upload.js')

const app = express();

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
app.use('/publish', publishRouter);
app.use('/order', orderRouter);
app.use('/footmark', footmarkRouter);
app.use('/concern', concernRouter);
app.use('/search', searchRouter);
app.use('/report', reportRouter)


app.use('/userManage', userManageRouter);
app.use('/customerManage', customerManageRouter);
app.use('/gameManage', gameManageRouter);
app.use('/orderManage', orderManageRouter);
app.use('/reportManage', reportManageRouter)

app.use('/upload', upload);
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
