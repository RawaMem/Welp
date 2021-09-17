import { csrfFetch } from "./csrf";
const GET_ALL_REVIEWS = `reviews/getReviewsForOneBusiness`;
const GET_USER_REVIEW = `reviews/getUserReviewForBusiness`;
const EDIT_REVIEW = `reviews/editReview`;
const ADD_REVIEW = `reviews/addReview`;
const DELETE_REVIEW = `reviews/deleteReview`;


const getReviews = reviewList => ({
    type: GET_ALL_REVIEWS,
    reviewList
});

const userReview = id => ({
    type: GET_USER_REVIEW,
    id
});

const editReview = updatedReview => ({
    type: EDIT_REVIEW,
    updatedReview
});

const addReview = reviewDetails => ({
    type: ADD_REVIEW,
    reviewDetails

});

const deleteReview = details => ({
    type: DELETE_REVIEW,
    details
});


//get all review for a business
export const allReviewsForBusiness = (businessId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews`)

    if (response.ok) {
        const reviewList = await response.json();
        dispatch(getReviews(reviewList));
    }
};

// export const userReviewForBusiness = (businessId, userId) => async dispatch => {
//     const response = await fetch(`/api/reviews`, {
//         method: 'GET',
//         body: JSON.stringify({businessId, userId})
//       })

//     if (response.ok) {
//         const userReview = await response.json();
//         dispatch(userReview(userReview));
//         return userReview;

//     }
// }

export const createReview = (reviewDetails) => async dispatch => {
    const response = await csrfFetch('/api/reviews/', {
      method: 'POST',
      body: JSON.stringify(reviewDetails)
    })
    if(response.ok){
      const newReview = await response.json()
      dispatch(addReview(newReview))
      return newReview;
    }
};

export const editReviewDetails = (reviewDetails) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewDetails.reviewId}`, {
      method: 'PUT',
      body: JSON.stringify(reviewDetails)
    })
    if(response.ok){
      const updatedReview = await response.json()
      dispatch(editReview(updatedReview))
      return updatedReview;
    }
};

export const deleteUserReview = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
      method: 'DELETE',
      body: JSON.stringify({reviewId})

    })
    if(response.ok){
        const allReviews = await response.json();
        dispatch(getReviews(allReviews));
        return 'deleted';
    }
};

const initialState = {list: [], currentReview: []};

const reviewReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_REVIEWS: {
            const allReviews = action.reviewList
            newState = {
                list: allReviews,
                currentReview: []
            }
            return newState
        }
        case GET_USER_REVIEW: {
            newState = {...state}
            newState.list.
            newState.currentReview = action.details
            console.log('=========>', newState);
            return newState
        }
        case EDIT_REVIEW: {
            newState = {...state};
            const reviewToUpdate = newState.list.find((review) => review.id === action.updatedReview.id)

            newState.list.map(review => {
                if (review.id === reviewToUpdate.id) {
                    return review = action.updatedReview
                } else {
                    return review
                }
            })

            return newState
        }
        case ADD_REVIEW: {
            newState = {...state};
            newState.list.push(action.reviewDetails)
            return newState;
        }

        case DELETE_REVIEW: {
            newState = {...state};
            let newReviewList = newState.list.map(review => {
                if (review.id !== action.details.id) {
                    return review;
                }
                return null;
            });
            newState = {
                list: newReviewList
            }
            return newState
        }
        default:
            return state
    }
}

export default reviewReducer;
