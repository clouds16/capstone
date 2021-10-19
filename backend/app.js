var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let signupRouter = require('./routes/signup');
let loginRouter = require('./routes/login')


// DATABASE
require("./database/mongoconnect.js")

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/signup', signupRouter)
app.use(loginRouter)

const User = require('./models/users')

app.post('/signup', async function(req, res ) {
  const user = new User(req.body)
  console.log("are we even here?")
  try {
    user.save()
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send();
  }
});


app.post('/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email) 
    console.log(user)  
  } catch (e) {
    res.status(400).send(e)
    }
  } );
  

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
