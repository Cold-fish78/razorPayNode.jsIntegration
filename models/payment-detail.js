const mongoose = require('mongoose')

const paymentDetailsSchema = new mongoose.Schema({
	orderId: {
		type: String,
		required: true
	},
	receiptId: {
		type: String
	},
	paymentId: {
		type: String,
	},
	signature: {
		type: String,
	},
	amount: {
		type: Number
	},
	currency: {
		type: String
	},
	createdAt: {
		type: Date
	},
	status: {
		type: String
	},
	mobileNumber: {
		type: String
	}
})

// module.exports = mongoose.model('PaymentDetail', paymentDetailsSchema)
const PaymentDetail = mongoose.model('PaymentDetail', paymentDetailsSchema);
module.exports = PaymentDetail;