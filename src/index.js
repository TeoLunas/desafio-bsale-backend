const express = require('express');
const app = express();

const port = 3000;

//Middleware
app.use(express.json());

// Routing

//Inicio del servidor
app.listen(port, ()=> console.log(`Server en puerto ${port}`))