const express = require('express');
require("dotenv").config();
const app = express();
const cors = require('cors');
const port = process.env.PORT;
const Routes = require('./routes');

app.use(express.json());
app.use(cors());
app.use(Routes);

app.listen(port, () => {
  console.log(`Aplicacón escuchando en el puerto ${port}`);
});
