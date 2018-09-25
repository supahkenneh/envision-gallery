const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const PORT = process.env.port || 8000;

const routes = require('./routes');

server.use(bodyParser.json());
server.use('/api', routes);

server.listen(PORT, (req, res) => {
  console.log(`Server started on port: ${PORT}`)
});