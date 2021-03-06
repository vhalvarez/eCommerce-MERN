const express = require('express')
const router = express.Router()
const {
    getProductById,
    getProducts,
    deleteProduct,
    updateProduct,
    createProduct,
    createProductReview,
    getsTopProducts
} = require('../controllers/productController')
const { protect, admin } = require('../middlewares/authMiddleware')

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getsTopProducts)
router
    .route('/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct)

module.exports = router
