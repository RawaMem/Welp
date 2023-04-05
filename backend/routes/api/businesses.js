const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Business, Review } = require('../../db/models');

const router = express.Router();



router.get('/:businessId(\\d+)/reviews', asyncHandler(async function(req, res) {
    const businessId = req.params.businessId
    const reviews = await Review.findAll({
        where: {businessId}
    })
    res.json(reviews)
}))
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



//create a business
router.post('/', asyncHandler(async function(req, res) {
    const newlyCreatedBusiness = await Business.create(req.body);
    return res.redirect(`/api/businesses/${newlyCreatedBusiness.id}`)
}));


//edit a business
router.put('/:businessId(\\d+)', asyncHandler(async function(req, res) {
    const {
        id,
        ownerId,
        title,
        imgUrl,
        category,
        description,
        address,
        city,
        state,
        zipCode,
    } = req.body
    const businessToEdit = await Business.findByPk(id);

    await businessToEdit.update({
        id: id,
        ownerId: ownerId,
        title: title,
        imgUrl: imgUrl,
        category: category,
        description: description,
        address: address,
        city: city,
        state: state,
        zipCode: zipCode,
    });

    const newBusiness = await Business.findByPk(id);

    // return res.redirect(`/api/businesses/${updatedBusiness.id}`)

    res.json(newBusiness);
}));

//delete a business
router.delete('/:businessId(\\d+)', asyncHandler(async function(req, res) {
    const {businessId} = req.body
    const business = await Business.findByPk(businessId)
    await business.destroy();
    const allBusinesses = await Business.findAll();
    return res.json(allBusinesses)
}));



module.exports = router;
