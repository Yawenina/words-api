/**
 * Created by yawenina on 4/1/18.
 */
const path = require('path');
const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressValidator());

app.use('/api', routes);
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
});

app.use((err, req, res) => {
  res.json({ status: err.status || 500, message: err.message });
});

module.exports = app;
