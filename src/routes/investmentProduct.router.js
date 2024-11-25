const express = require('express');
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require('../controllers/investmentProduct.controller');
const validate = require('../app/middlewares/validation.middleware');
const investmentProductValidationSchema = require('../app/validators/investmentProduct.validator');

const router = express.Router();

router.post('/', validate(investmentProductValidationSchema), createProduct);
router.get('/', getProducts);
router.put('/:id', validate(investmentProductValidationSchema), updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
