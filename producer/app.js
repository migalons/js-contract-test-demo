const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');

const app = express();


let books = [
  {
    title: "It",
    author: "Stephen King",
    year: 1992,
    price: 10.25,
    currency: "euro",
    stars: 3
  },
  {
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    year: 1605,
    price: 0,
    currency: "euro",
    stars: 2
  },
  {
    title: "La ciudad de los prodigios",
    author: "Eduardo Mendoza",
    year: 1986,
    price: 12.00,
    currency: "euro",
    stars: 4
  }
]

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/book/', function(req, res, next){
  res.send(books)
});

app.get('/book/:id', function(req, res, next){
  res.send(books[req.params.id])
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000);
