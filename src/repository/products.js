const knex = require('../config/database')

function registerProduct(productName) {
  return knex('products').insert({ productName })
}

function listProducts() {
  return knex.select().from('products')
}

function deleteProduct(productId) {
  return knex('products')
    .where('id', productId)
    .del()
}

function deleteAllProducts() {
  return knex('products').del()
}

module.exports = { registerProduct, listProducts, deleteProduct, deleteAllProducts }
