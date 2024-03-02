const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connect } = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json()); // permitindo requisições em json para a api
app.use(bodyParser.urlencoded({ extended: false })); // permitindo requisições GET (pela url)
const port = 3000;

require('./api/usuario/usuario.routes')(app);

app.listen(port, () => {
  connect('mongodb+srv://m001-student:pedrinho18@sandbox.n2l43.mongodb.net/?retryWrites=true&w=majority&appName=Sandbox');

  console.log('coleeeeeeeeeeeeeeeeee');
});
