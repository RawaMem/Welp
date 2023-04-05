const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Business, Review } = require('../../db/models');

const router = express.Router();


//get all reviews for a business
router.get('/', asyncHandler(async function(req, res) {
    const reviewList = await Review.findAll({
        include: {
            model: User
        }
    })
    return res.json(reviewList)
}));

// //get user review
// router.get('/reviews', asyncHandler(async function(req, res) {
//     const {businessId, userId} = req.params.businessId
//     const userReview = await Review.findOne({
//         where: {
//             businessId: businessId,
//             userId: userId
//         }
//     })
//     return res.json(userReview)
// }));

//create a review
router.post('/', asyncHandler(async function(req, res) {
    const { userId, businessId, rating, content } = req.body
    const newReview = await Review.create({
        userId: +userId,
        businessId: +businessId,
        rating: +rating,
        content: content
    });

    return res.redirect(`/api/businesses/${newReview.businessId}`)
}));


//edit a review
router.put('/edit/:reviewId(\\d+)', asyncHandler(async function(req, res) {
    const {
        reviewId,
        userId,
        businessId,
        rating,
        content,
    } = req.body
    const reviewToEdit = await Review.findByPk(reviewId);

    await reviewToEdit.update({
        id: reviewId,
        userId: userId,
        businessId: businessId,
        rating: rating,
        content: content,
    });

    const newReview = await Review.findByPk(reviewId);

    // return res.redirect(`/api/businesses/${updatedBusiness.id}`)

    res.json(newReview);
}));

//delete a review
router.delete('/:reviewId(\\d+)', asyncHandler(async function(req, res) {
    const {reviewId} = req.body
    const review = await Review.findByPk(+reviewId)
    await review.destroy();
    // const allReviews = await Review.findAll();
    return res.json({message: 'review successfully deleted'})
}));


















module.exports = router;
