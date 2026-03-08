const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController')


router.post('/order', orderController.create);


module.exports = router;