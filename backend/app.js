// Express Setup
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors")  
var indexRouter = require('./routes/index');
var app = express();



// DATABASE
require("./database/mongoconnect.js");
const User = require('./models/users');
const Stats = require('./models/stats');
const Workouts = require('./models/workouts')

// Routes 
app.use('/', indexRouter);


// Routes 
app.post('/signup', async function(req, res ) {
  
  console.log(req.body)

  const user = new User(req.body);
  try {
    await user.save()
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send();
  }
});


app.post("/login" , (req, res) => {
  console.log("login active", req.body)

  let user = User.find({"email" : req.body.email } , (err, user) => {
    res.send(user)
  })
})

app.get("/users" , (req, res) => {
  console.log("request working")
  User.find({}, function (err, users) {
    res.send(users);
});
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors);

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
