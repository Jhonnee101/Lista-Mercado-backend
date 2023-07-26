const { listProducts } = require('../repository/products')

async function listProductsHandler(_req, res) {
  const result = await listProducts()
  res.send(result)
}

module.exports = listProductsHandler
