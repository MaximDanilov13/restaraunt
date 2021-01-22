var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var contactsRouter = require('./routes/contacts');
var reservationRouter = require('./routes/reservation');

var app = express();

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

// Set up mongoose connection
const mongoose = require("mongoose");
const dev_db_url =
  "mongodb+srv://User:12345@restaurant-thirteen.yiu16.mongodb.net/restaurant-thirteen?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    key: "user_sid",
    secret: "secret key",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 },
    store: new MongoStore({ mongooseConnection: db }),
  })
);

app.use('/', indexRouter);
app.use('/contacts', contactsRouter);
app.use('/reservation', reservationRouter);

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