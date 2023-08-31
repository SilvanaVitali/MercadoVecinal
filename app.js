const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const path = require('path');
const dotenv = require('dotenv').config();
const PORT = 3000;

const indexRouter = require('./routes/index.routes.js');
const usersRouter = require('./routes/user.routes.js');
const postsRouter = require('./routes/post.routes.js');

//Config de handlebars
app.engine('.hbs', engine({ extname: '.hbs'}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules/axios/dist')));
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use(express.static(path.join(__dirname, 'node_modules/toastr/build')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));