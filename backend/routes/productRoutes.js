const express = require('express')
const router = express.Router()
const {
    getProductById,
    getProducts,
} = require('../controllers/productController')

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.route('/').get(getProducts)

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.route('/:id').get(getProductById)

module.exports = router
