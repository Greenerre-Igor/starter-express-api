var express = require('express');
const Testimonial = require('../models/Testimonial');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
    const testimonials = await Testimonial.find({});
    res.send({ success: true, testimonials});
});

module.exports = router;
