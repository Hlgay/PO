// index.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db');
const Endereco = require('./models/endereco');

const app = express();
const PORT = process.env.PORT || 3001;
const enderecoRoutes = require('./Routes/enderecos');
app.use('/enderecos', enderecoRoutes);

app.use(bodyParser.json());

// Rotas...

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });


});

