// Importacion de paquetes externos
const express = require('express');
const cors = require('cors');
const path = require('path')
const { fileURLToPath } = require('url');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// Importaciones de Archivos Propios
const routerApi = require('./routes/index');
const {config} = require('./config/config');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler')
require("dotenv").config();
const app = express();

//Definicion de puerto
const port = config.port || 3000;

const swaggerSpec = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'Challange Bsale',
            version: '1.0.0'
        }
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`]
}

//Middleware
app.use(cors());
app.use(express.json());

// Routing
routerApi(app);
app.use('/api/doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

//Middlewars para manejos de error post routing
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

//Inicio del servidor
app.listen(port, ()=> {
    console.log(`Server en puerto ${port}`)
})