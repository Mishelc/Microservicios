const express = require('express');
const router = express.Router();
const Product = require('../model/product');

router.get('/', async (req, res) => {
  const product = await Product.find();
  res.render('index', {
    product
  });
});

router.post('/add', async (req, res, next) => {
  const product = new Product(req.body);
  await product.save();
  res.redirect('/');
});
/*
router.get('/edit/:id', async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  console.log(product)
  res.render('edit', { product });
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await Product.update({_id: id}, req.body);
  res.redirect('/');
});
*/
router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Product.remove({_id: id});
  res.redirect('/');
});
module.exports = router;