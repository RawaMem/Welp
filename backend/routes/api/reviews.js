const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Business, Review } = require('../../db/models');

const router = express.Router();


//get all reviews for a business
router.get('/reviews', asyncHandler(async function(req, res) {
    const {businessId} = req.body
    const reviews = await Review.findAll({
        where: {
            businessId: +businessId
        }
    })
    return res.json(reviews)
}));

//get user review
router.get('/reviews', asyncHandler(async function(req, res) {
    const {businessId, userId} = req.params.businessId
    const userReview = await Review.findOne({
        where: {
            businessId: businessId,
            userId: userId
        }
    })
    return res.json(userReview)
}));

//create a review
router.post('/', asyncHandler(async function(req, res) {
    const newReview = await Review.create(req.body);
    return res.redirect(`/api/businesses/${newReview.businessId}`)
}));


//edit a review
router.put('/:businessId(\\d+)', asyncHandler(async function(req, res) {
    const {
        id,
        userId,
        businessId,
        rating,
        content,
    } = req.body
    const reviewToEdit = await Review.findByPk(id);

    console.log('=========>', reviewToEdit)

    await reviewToEdit.update({
        id: id,
        userId: userId,
        businessId: businessId,
        rating: rating,
        content: content,
    });

    const newReview = await Review.findByPk(id);

    console.log('=========>UPDATED', newReview)
    // return res.redirect(`/api/businesses/${updatedBusiness.id}`)

    res.json(newReview);
}));

//delete a business
router.delete('/reviews/:reviewId(\\d+)', asyncHandler(async function(req, res) {
    const {reviewId} = req.body
    const review = await Review.findByPk(reviewId)
    await review.destroy();
    const allReviews = await Review.findAll();
    return res.json(allReviews)
}));


















module.exports = router;
