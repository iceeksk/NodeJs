const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');

const contr = require('./controller/controller');

const app = express();
app.use(bodyParser.json());
app.listen(3001);
console.log('Listening port 3001');
contr(app);