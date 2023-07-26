const express = require('express');
const registerProductHandler = require('../handler/registerProduct')
const listProductsHandler = require('../handler/listProducts');
const deleteProductHandler = require('../handler/deleteProduct');
const deleteAllProductsHandler = require('../handler/deleteAllProducts')

const productRouter = express.Router();

productRouter.post('', registerProductHandler)
productRouter.get('/list', listProductsHandler)
productRouter.delete('/all', deleteAllProductsHandler)
productRouter.delete('/:id', deleteProductHandler)

module.exports = productRouter
