const { deleteAllProducts } = require('../repository/products')

async function deleteAllProductsHandler(_req, res) {
  await deleteAllProducts()
  res.sendStatus(201)
}

module.exports = deleteAllProductsHandler
