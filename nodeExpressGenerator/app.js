var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dbConnection = require('./dbConnector');

var indexRouter = require('./routes/index');
var userInfoRouter = require('./routes/userInformation');
var codeInquiryRouter = require('./routes/codeInquiry');
var codeRegistryRouter = require('./routes/codeRegistry');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 데이터베이스 연결을 모든 라우터에 주입
app.use((req, res, next) => {
  req.db = dbConnection;
  next();
});

app.use('/', indexRouter);
app.use('/user', userInfoRouter);
app.use('/codeInquiry', codeInquiryRouter);
app.use('/codeRegistry', codeRegistryRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
