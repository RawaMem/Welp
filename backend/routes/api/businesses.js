const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Business, Review } = require('../../db/models');

const router = express.Router();


//get all businesses
router.get('/', asyncHandler(async function(req, res) {
    const businesses = await Business.findAll();
    return res.json(businesses);
}));

//get one business
router.get('/:businessId(\\d+)', asyncHandler(async function(req, res) {
    const businessId = req.params.businessId
    const business = await Business.findByPk(businessId)
    return res.json(business)
}));

//get all reviews for a business
router.get('/:businessId(\\d+)/reviews', asyncHandler(async function(req, res) {
    const businessId = req.params.businessId
    const reviews = await Review.findAll({
        where: {
            businessId: businessId
        }
    })
    return res.json(reviews)
}));

















module.exports = router;
