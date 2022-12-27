var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var toyRouter = require('./routes/toy');
var app = express();


var mongoose = require('mongoose')
var url = 'mongodb+srv://Truong2002:Truong2002@cluster0.y7zoaiw.mongodb.net/test'
mongoose.connect(url, { useNewUrlParser: true }, err => {
  if (!err) {
    console.log('DB connect succeed !')
  } else {
    console.error(err)
  }
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//body parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/toy', toyRouter);


//-----
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Run Run Run')
})
module.exports = app;
