const express = require('express');
const app = express();

const productRouter = require('./routes/productRoutes')
const routerApi = require('./routes/index')

const port = 3000;

//Middleware
app.use(express.json());

// Routing
routerApi(app)

//Inicio del servidor
app.listen(port, ()=> console.log(`Server en puerto ${port}`))