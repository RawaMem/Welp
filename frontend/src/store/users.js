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

const deleteReview = reviewId => ({
    type: DELETE_REVIEW,
    reviewId
});


//get user's review for a business
export const userReviewForBusiness = (userId, businessId) => async dispatch => {
    const response = await fetch(`api/users/${userId}/businesses/${businessId}/reviews`);

    if (response.ok) {
        const userReviewDetails = await response.json();
        dispatch(userReview(userReviewDetails))

    }
};

//add user review to a business
export const addUserReview = (reviewDetails, userId, businessId) => async dispatch => {
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
export const editUserReview = (reviewDetails, userId, businessId) => async dispatch => {
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
export const deleteUserReview = (reviewId, userId, businessId) => async dispatch => {
    const response = await fetch(`api/users/${userId}/businesses/${businessId}/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: 'application/json',
        body: JSON.stringify(reviewId)
    });
    if (response.ok) {
        const reviewId = await response.json();
        dispatch(deleteReview(reviewId))
    }
}

const initialState = {};

cosnt userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REVIEW_FOR_BUSINESS: {
            const newUserReviewForBusiness = {};
            return newUserReviewForBusiness[action.userReviewDetails.id] = { userReviewDetails}
        }
        case ADD_REVIEW: {
            const newReviewState = {
                ...state,
                [action.newReviewDetails.id]: action.newReviewDetails
            }
            return newReviewState
        }

        case EDIT_REVIEW: {
            const newReviewState = {
                ...state,
                [action.newReviewDetails.id]: action.newReviewDetails
            }
            return newReviewState
            }


        case DELETE_REVIEW: {
            const newReviewState = {

            }
        }

        

    }
}
