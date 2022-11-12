// Importacion de paquetes externos
const express = require('express');
const cors = require('cors');

// Importaciones de Archivos Propios
const routerApi = require('./routes/index');
const config = require('./config/config');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler')

const app = express();

//Definicion de puerto
const port = config.port || 3000;

//Middleware
app.use(cors());
app.use(express.json());

// Routing
routerApi(app)

//Middlewars para manejos de error post routing
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

//Inicio del servidor
app.listen(port, ()=> console.log(`Server en puerto ${port}`))