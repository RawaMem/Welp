const USER_REVIEW_FOR_BUSINESS = `reviews/getUserReviewForBusiness`;
const ADD_REVIEW = `reviews/addReview`;
const EDIT_REVIEW = `reviews/editReview`;
const DELETE_REVIEW = `reviews/deleteReview`;

const userReview = userReviewDetails => ({
    type: USER_REVIEW_FOR_BUSINESS,
    userReviewDetails
});

const addReview = newReviewDetails => ({
    type: ADD_REVIEW,
    newReviewDetails

});

const editReview = newReviewDetails => ({
    type: EDIT_REVIEW,
    newReviewDetails
});

const deleteReview = id => ({
    type: DELETE_REVIEW,
    id
});


//get user's review for a business
export const userReviewForBusiness = (id) => async dispatch => {
    const response = await fetch(`api/users/${userId}/businesses/${businessId}/reviews`);

    if (response.ok) {
        const userReviewDetails = await response.json();
        dispatch(userReview(userReviewDetails))

    }
};

//add user review to a business
export const addUserReview = (reviewDetails) => async dispatch => {
    const response = await fetch(`api/users/${userId}/businesses/${businessId}/reviews`, {
        method: 'POST',
        headers: 'application/json',
        body: JSON.stringify(reviewDetails)
    });
    if (response.ok) {
        const newReviewDetails = await response.json();
        dispatch(addReview(newReviewDetails))
    }
}

//edit users review
export const editUserReview = (reviewDetails) => async dispatch => {
    const response = await fetch(`api/users/${userId}/businesses/${businessId}/reviews/${reviewId}`, {
        method: 'PATCH',
        headers: 'application/json',
        body: JSON.stringify(reviewDetails)
    });
    if (response.ok) {
        const newReviewDetails = await response.json();
        dispatch(editReview(newReviewDetails))
    }
}

//delete users review
export const deleteUserReview = (reviewDetails) => async dispatch => {
    const response = await fetch(`api/users/${userId}/businesses/${businessId}/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: 'application/json',
        body: JSON.stringify(reviewDetails)
    });
    if (response.ok) {
        const reviewId = await response.json();
        dispatch(deleteReview(reviewId))
    }
}
