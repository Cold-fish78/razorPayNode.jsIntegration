// Imports
var express = require('express');
var router = express.Router();

const PaymentDetail =  require('../models/payment-detail')
const { nanoid } = require("nanoid");
const paymentController = require('../controllers/payment_controller');
// Create an instance of Razorpay

/**
 * Make Donation Page
 * 
 */
router.get('/', function(req, res, next) {
	// Render form for accepting amount
	res.render('pages/payment/order', { 
		title: 'Donate for Animals'
	});
});

/**
 * Checkout Page
 * 
 */
router.post('/order', paymentController.order);

/**
 * Verify Payment
 * 
 */
router.post('/verify',paymentController.verifyPayment);

module.exports = router;