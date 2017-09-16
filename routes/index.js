var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.njk');
});

router.get('/about', function(req, res, next) {
    res.render('about.njk');
});

router.get('/testimonials', function(req, res, next) {
    res.render('testimonials.njk');
});

router.get('/team', function(req, res, next) {
    res.render('team.njk');
});

router.get('/faq', function(req, res, next) {
    res.render('faq.njk');
});

router.get('/contact', function(req, res, next) {
    res.render('contact.njk');
});

router.get('/support', function(req, res, next) {
    res.render('support.njk');
});

router.get('/terms', function(req, res, next) {
    res.render('terms.njk');
});

router.get('/privacy', function(req, res, next) {
    res.render('privacy.njk');
});

router.get('/services/education', function(req, res, next) {
    res.render('education.njk');
});

router.get('/services/travel', function(req, res, next) {
    res.render('travel.njk');
});

router.get('/services/visa', function(req, res, next) {
    res.render('visa.njk');
});

module.exports = router;