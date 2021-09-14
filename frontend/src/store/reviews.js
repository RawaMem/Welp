const { response } = require("../../../backend/app");

const REVIEWS_FOR_BUSINESS = `reviews/getReviewsForOneBusiness`;
const USER_REVIEW_FOR_BUSINESS = `reviews/getUserReviewForBusiness`;
const ADD_REVIEW = `reviews/addReview`;
const EDIT_REVIEW = `reviews/editReview`;
const DELETE_REVIEW = `reviews/deleteReview`;


const getReviews = id => ({
    type: REVIEWS_FOR_BUSINESS,
    id
});

const userReviews = id => ({
    type: USER_REVIEW_FOR_BUSINESS,
    id
});

const addReview = reviewDetails => ({
    type: ADD_REVIEW,
    reviewDetails

});

const editReview = reviewDetails => ({
    type: EDIT_REVIEW,
    reviewDetails
});

const deleteReview = id => ({
    type: DELETE_REVIEW,
    id
});


const allReviewsForBusiness = (business) => async dispatch => {
    const response = await fetch(`api/business/${business.id}/reviews`);

    if (response.ok) {
        const reviewList = await response.json();
        dispatch(getReviews(reviewList));
    }
};

const userReviewsForBusiness = (id) => async dispatch => {
    const response = await fetch(``);

    if (response.ok) {
        const user

    }
}
