const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');

const index = require('./routes/index');
app.use(index);

const about = require('./routes/about');
app.use(about);

const notFound = require('./routes/notFound');
app.use(notFound);

const port = 3000;
app.listen(port);
