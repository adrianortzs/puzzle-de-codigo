const express = require('express');
const routes = require('./routes');
const middlewares = require('./middlewares');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
const PORT = 4000;

middlewares.setupAPP(app);
routes.setup(app);


app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});