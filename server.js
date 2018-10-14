require('dotenv').config();
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const Redis = require('connect-redis')(session);
const passport = require('passport');

const PORT = process.env.port || 8000;

const routes = require('./routes');

server.use(bodyParser.json());

server.use(
  session({
    store: new Redis(),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

server.use(passport.initialize());
server.use(passport.session());

server.use('/api', routes);

server.listen(PORT, (req, res) => {
  console.log(`Server started on port: ${PORT}`)
});

//sidebar bug