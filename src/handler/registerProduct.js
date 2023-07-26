const { registerProduct } = require('../repository/products')

async function registerProductHandler(req, res) {
  console.log(req.body)
  const productName = String(req.body.productName).trim()

  if (!productName || productName === "") return res.status(400).send('Campo "productName" inválido')
  if (productName.length > 100) return res.status(400).send('Campo "productName" é muito longo (máximo 100 caracteres)')

  await registerProduct(productName)

  res.sendStatus(201)
}

module.exports = registerProductHandler
