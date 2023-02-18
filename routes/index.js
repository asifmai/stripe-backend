const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexcontroller');

/* GET - Public - home page */
router.post('/stripe/create-checkout-session', indexController.stripe_create_checkout_session_post);

module.exports = router;
