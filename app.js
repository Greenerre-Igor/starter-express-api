var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

require("dotenv").config(); 

var indexRouter = require('./routes/index');
var blogsRouter = require('./routes/blogs');
var inquiriesRouter = require('./routes/inquiries');
var testimonialsRouter = require('./routes/testimonials');

var app = express();

// Connect Database
try {
  (async () => {
    await mongoose.connect(
      process.env.MONGODB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log('MongoDB Connected...');
  })()
} catch (err) {
  console.error(err.message);
  process.exit(1);
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/blogs', blogsRouter);
app.use('/inquiries', inquiriesRouter);
app.use('/testimonials', testimonialsRouter);
app.listen(3001, () => {
  console.log('server is runnning on 3001 port');
})

module.exports = app;
