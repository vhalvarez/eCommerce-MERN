const express = require('express')
const router = express.Router()
const {
    addOrderItems
} = require('../controllers/orderController')
const { protect } = require('../middlewares/authMiddleware')


router.route('/').post(protect, addOrderItems)

module.exports = router
