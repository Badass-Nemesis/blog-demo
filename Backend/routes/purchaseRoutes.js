const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');

router.post('/', purchaseController.selectCourses);
router.get('/dummy-payment', purchaseController.dummyPaymentPage);
router.post('/verify', purchaseController.twoStepVerification);

module.exports = router;
