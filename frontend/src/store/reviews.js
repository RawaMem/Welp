import { csrfFetch } from "./csrf";
const GET_ALL_REVIEWS = `reviews/getReviewsForOneBusiness`;
const GET_USER_REVIEW = `reviews/getUserReviewForBusiness`;
const EDIT_REVIEW = `reviews/editReview`;
const ADD_REVIEW = `reviews/addReview`;
const DELETE_REVIEW = `reviews/deleteReview`;
const CLEAR_REVIEWS = `reviews/clearReviews`;


const getReviewsAction = reviews => ({
    type: GET_ALL_REVIEWS,
    reviews
});

const currentUserReviewAction = reviews => ({
    type: GET_USER_REVIEW,
    reviews
});

const editReviewAction = edittedReview => ({
    type: EDIT_REVIEW,
    edittedReview
});

const addReviewAction = review => ({
    type: ADD_REVIEW,
    review

});

const deleteReviewAction = id => ({
    type: DELETE_REVIEW,
    id
});

export const clearAllReviewsAction = () => ({
    type: CLEAR_REVIEWS
})

export const allReviewsOfUserThunk = (userId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/current`)

    if (response.ok) {
        const userReviews = await response.json()
        dispatch(currentUserReviewAction(userReviews))
    }
}


//get all review for a business
//allReviewsForBusiness
export const allReviewsForBusinessThunk = (businessId) => async dispatch => {
    const response = await csrfFetch(`/api/businesses/${businessId}/reviews`)

    if (response.ok) {
        const reviewList = await response.json();
        dispatch(getReviewsAction(reviewList));
    }
};


//createReview
export const createReviewThunk = (reviewDetails) => async dispatch => {
    const response = await csrfFetch('/api/reviews/', {
      method: 'POST',
      body: JSON.stringify(reviewDetails)
    })
    if(response.ok){
      const newReview = await response.json()
      dispatch(addReviewAction(newReview))
      return newReview;
    }
};
///editReviewDetails
export const editReviewThunk = (reviewDetails) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/edit/${reviewDetails.reviewId}`, {
      method: 'PUT',
      body: JSON.stringify(reviewDetails)
    })
    if(response.ok){
      const newReview = await response.json()
      dispatch(editReviewAction(newReview))
      return newReview;
    }
};
//deleteUserReview
export const deleteReviewThunk = (reviewId) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
      method: 'DELETE',
      body: JSON.stringify({reviewId})

    })
    if(res.ok){
        const response = await res.json();
        if (response.message === 'review successfully deleted') {
            dispatch(deleteReviewAction(reviewId));
            return 'deleted';
        }
    }
};

//current review is for when you edit a review want to preload the form
const initialState = {allReviews: {}, currentReview: {}};

const reviewReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_REVIEWS: {
            newState = {...state, allReviews: {}, currentReview: {}}
            action.reviews.forEach(review => {
                newState.allReviews[review.id] = review
            })
            return newState
        }
        case GET_USER_REVIEW: {
            newState = {...state, allReviews: {...state.allReviews}, currentReview: {...state.currentReview}}
            action.reviews.forEach(review => {
                newState.allReviews[review.id] = review
            })
            return newState
        }
        case EDIT_REVIEW: {
            newState = {...state, allReviews: {...state.allReviews}, currentReview: {...state.currentReview}}
            newState.allReviews[action.edittedReview.id] = action.edittedReview
            return newState
        }
        case ADD_REVIEW: {
            newState = {...state, allReviews: {...state.allReviews}, currentReview: {...state.currentReview}}
            newState.allReviews[action.review.id] = action.review
            return newState;
        }

        case DELETE_REVIEW: {
            newState = {...state, allReviews: {...state.allReviews}, currentReview: {...state.currentReview}}
            delete newState.allReviews[action.id]
            return newState
        }
        case CLEAR_REVIEWS: {
            newState = {...state, allReviews: {...state.allReviews}, currentReview: {...state.currentReview}}
            newState.allReviews = {}
            return newState
        }
        default:
            return state
    }
}


// const initialState = {list: [], currentReview: []};

// const reviewReducer = (state = initialState, action) => {
//     let newState;
//     switch (action.type) {
//         case GET_ALL_REVIEWS: {
//             const allReviews = action.reviewList
//             newState = {
//                 list: allReviews,
//                 currentReview: []
//             }
//             return newState
//         }
//         case GET_USER_REVIEW: {
//             newState = {...state}
//             newState.list.
//             newState.currentReview = action.details
//             return newState
//         }
//         case EDIT_REVIEW: {
//             newState = {...state};
//             const reviewToUpdate = newState.list.find((review) => review.id === action.newReview.id)

//             const mappedState = newState.list.map(review => {
//                 if (review.id === reviewToUpdate.id) {
//                     return review = action.newReview
//                 } else {
//                     return review
//                 }
//             });
//             newState.list = mappedState;
//             return newState
//         }
//         case ADD_REVIEW: {
//             newState = {...state};
//             newState.list.push(action.reviewDetails)
//             return newState;
//         }

//         case DELETE_REVIEW: {
//             newState = {...state};
//             let newReviewList = newState.list.map(review => {
//                 if (review.id !== action.details.id) {
//                     return review;
//                 }
//                 return null;
//             });
//             newState = {
//                 list: newReviewList
//             }
//             return newState
//         }
//         default:
//             return state
//     }
// }

export default reviewReducer;
