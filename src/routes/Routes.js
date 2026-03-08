const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController')


router.post('/order', orderController.create);
router.get('/order/list', orderController.getAll);
router.get('/order/:orderId', orderController.getById);
router.put('/order/:orderId', orderController.update);


module.exports = router;