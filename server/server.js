const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();


// connection to db

mongoose.connect('mongodb://localhost/productos')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));


// importing routes
const indexRoutes = require('./routes/index');
//variables globales
app.locals=global.config.site;
// settings
app.set('port', process.env.PORT || 3000);
app.set('views', './public');
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
// routes
app.use('/', indexRoutes);

//Static Files
app.use(express.static('./public/css'));
app.use(express.static('./public/vendors'));
app.use(express.static('./public/imagenes'));
//Server is listening
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
