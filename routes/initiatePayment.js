// Imports
var express = require('express');
var router = express.Router();
const paymentController = require('../controllers/payment_controller');
/**
 * Home page
 * 
 */
router.get('/initiatePayment', paymentController.initiatePayment); 

module.exports = router;