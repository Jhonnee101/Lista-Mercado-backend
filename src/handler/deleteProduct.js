const { deleteProduct } = require('../repository/products')

async function deleteProductHandler(req, res) {
  const { id } = req.params
  await deleteProduct(id)
  res.sendStatus(201)
}

module.exports = deleteProductHandler
