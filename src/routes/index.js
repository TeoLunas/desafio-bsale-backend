const express = require('express');
const productsRouter = require('./productRoutes')

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products', productsRouter)
    // router.use('/category', categoryRouter);
}

module.exports = routerApi;