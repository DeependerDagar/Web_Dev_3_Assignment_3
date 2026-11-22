const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  adjustStock,
  deleteProduct,
  getLowStockReport,
  getCategorySummary,
} = require('../controllers/productController');

// Reporting & Aggregation routes (must come before /:id)
router.get('/low-stock', getLowStockReport);
router.get('/summary', getCategorySummary);

// Core CRUD routes
router.route('/')
  .post(createProduct)
  .get(getAllProducts);

router.route('/:id')
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

// Stock adjustment route
router.patch('/:id/stock', adjustStock);

module.exports = router;
