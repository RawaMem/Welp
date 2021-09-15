const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
];

//user signup
router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);


//get user review for a business
router.get('/:userId(\\d+)/businesses/:businessId(\\d+)/reviews', asyncHandler(async function(req, res) {
  const businessId = req.params.businessId
  const userId = req.params.userId
  const userReviewDetails = await Review.findOne({
      where: {
          businessId,
          userId
      }
  })
  return res.json(userReviewDetails)
}));


//user adds review to a business
router.post('/:userId(\\d+)/businesses/:businessId(\\d+)/reviews', asyncHandler(async function(req, res) {
  const businessId = req.params.businessId
  const userId = req.params.userId
  const { content, rating } = req.body;

  const newReview = await Review.create({
    userId,
    businessId,
    rating,
    content
  })
  //console.log newReview to see what it is

  return res.json(newReview)
}));


//user edits their own review for a business
router.patch('/:userId(\\d+)/businesses/:businessId(\\d+)/reviews/:reviewId(\\d+)', asyncHandler(async function(req, res) {
  const { businessId, userId, reviewId } = req.params
  const { content, rating } = req.body;

  const oldReview = await Review.findByPk(reviewId);

  const newReviewDetails = {
    userId,
    businessId,
    rating,
    content
  }

  const updatedReview = await oldReview.update(newReviewDetails)
  //console.log newReview to see what it is

  return res.json(updatedReview)
}));

//user deltes their own review
router.delete('/:userId(\\d+)/businesses/:businessId(\\d+)/reviews/:reviewId(\\d+)', asyncHandler(async function(req, res) {
  const reviewId = parseint(req.params.reviewId, 10)


  const review = await Review.findByPk(reviewId);

  await review.destroy();

  const updatedReview = await oldReview.update(newReviewDetails)
  //console.log newReview to see what it is

  return res.json(reviewId)
}));




module.exports = router;
