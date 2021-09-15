import { csrfFetch } from "./csrf";

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
    const response = await csrfFetch(`api/users/${userId}/businesses/${businessId}/reviews`);

    if (response.ok) {
        const userReviewDetails = await response.json();
        dispatch(userReview(userReviewDetails))

    }
};

//add user review to a business
export const addUserReview = (reviewDetails, userId, businessId) => async dispatch => {
    const response = await csrfFetch(`api/users/${userId}/businesses/${businessId}/reviews`, {
        method: 'POST',
        body: JSON.stringify(reviewDetails)
    });
    if (response.ok) {
        const newReviewDetails = await response.json();
        dispatch(addReview(newReviewDetails)) //dispatching to state
        return newReviewDetails //returning to component for use if needed
    }
}

//edit users review
export const editUserReview = (reviewDetails, userId, businessId, reviewId) => async dispatch => {
    const response = await csrfFetch(`api/users/${userId}/businesses/${businessId}/reviews/${reviewId}`, {
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
    const response = await csrfFetch(`api/users/${userId}/businesses/${businessId}/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: 'application/json',
        body: JSON.stringify(reviewId)
    });
    if (response.ok) {
        const reviewId = await response.json();
        dispatch(deleteReview(reviewId))
    }
}

const initialState = {reviews: {}};

const userReviewReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case USER_REVIEW_FOR_BUSINESS: {
            // const newUserReviewForBusiness = {};
            // return newUserReviewForBusiness[action.userReviewDetails.id] = action.userReviewDetails
            //might not need this route because we can just access user review thats already in the state
            //let userReview;
            // for (let key in state.reviews) {
            //      if (state.reviews.key.userId === userId && state.reviews.key.businessId === businessId) {
            //          userReview = state.reviews.key
            //return userReview
            //
            //use .find in the component
            // import useParams and get userId and businessId and use above

            newState = {...state};
            return newState
        }
        case ADD_REVIEW: {
            const newReviewObj = {...state.reviews};
            newReviewObj[action.newReviewDetails.id]= action.newReviewDetails
            newState = {...state}
            newState.reviews = newReviewObj;
            return newState
        }
        case EDIT_REVIEW: {
            const newReviewObj = {...state.reviews};
            newReviewObj[action.newReviewDetails.id]= action.newReviewDetails
            newState = {...state}
            newState.reviews = newReviewObj;
            return newState
            }
        case DELETE_REVIEW: {
            const workObj = {...state.reviews}
            const newReviewObj = {};
            for (let key in workObj) {
                if (key !== action.reviewId) {
                    newReviewObj[key] = workObj[key]
                }
            }
            newState = {...state}
            newState.reviews = newReviewObj;
            return newState
        }
        default:
            return state
    }
}

export default userReviewReducer;
