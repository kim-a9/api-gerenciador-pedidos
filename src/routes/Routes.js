const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController')


router.post('/order', orderController.create);
router.get('/order/:orderId', orderController.getById);


module.exports = router;