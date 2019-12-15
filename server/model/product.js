const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
  nombre: String,
  categoria: String,
  marca: String,
  precio: Number
});

module.exports = mongoose.model('product', ProductSchema);