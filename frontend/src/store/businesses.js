import { csrfFetch } from "./csrf";
const GET_ALL_BUSINESSES = 'businesses/getAllBusinesses';
const GET_ONE_BUSINESS = '/businesses/getOneBusiness';
const EDIT_BUSINESS = `businesses/editBusiness`;
const CREATE_BUSINESS = `businesses/addBusiness`;
const DELETE_BUSINESS = `businesses/deleteBusiness`
const CLEAR_CURRENT_BUSINESS = `businesses/clearCurrentBusiness`
const CLEAR_ALL_BUSINESSES = `businesses/clearAllBusiness`

//rename
const getAllBusinessesAction = businesses => ({
    type: GET_ALL_BUSINESSES,
    businesses
});

const getOneBusinessAction = business => ({
    type: GET_ONE_BUSINESS,
    business
});

const editBusinessAction = editedBusiness => ({
    type: EDIT_BUSINESS,
    editedBusiness
});

const createBusinessAction = createdBusiness => ({
    type: CREATE_BUSINESS,
    createdBusiness
});

const deleteBusinessAction = id => ({
    type: DELETE_BUSINESS,
    id
});

export const clearCurrentBusinessAction = () => ({
    type: CLEAR_CURRENT_BUSINESS
}

)
export const clearAllBusinessAction = () => ({
    type: CLEAR_ALL_BUSINESSES
})

// listOfAllBusinesses
export  const getAllBusinessesThunk = () => async dispatch => {
    const response = await csrfFetch(`/api/businesses`);

    if (response.ok) {
        const businesses = await response.json();
        dispatch(getAllBusinessesAction(businesses));
    }
};
//getOneBusiness
export const getOneBusinessThunk = (businessId) => async dispatch => {
    const response = await csrfFetch(`/api/businesses/${businessId}`);

    if (response.ok) {
        const details = await response.json();
        dispatch(getOneBusinessAction(details));
    }
};

//createBusiness
export const createBusinessThunk = (businessDetails) => async dispatch => {
    const response = await csrfFetch('/api/businesses', {
      method: 'POST',
      body: JSON.stringify(businessDetails)
    })
    if(response.ok){
      const newBusiness = await response.json()
      dispatch(createBusinessAction(newBusiness))
      return newBusiness;
    }
};

// editBusinessDetails
export const editBusinessThunk = (businessDetails) => async dispatch => {
    const response = await csrfFetch(`/api/businesses/${businessDetails.id}`, {
      method: 'PUT',
      body: JSON.stringify(businessDetails)
    })
    if(response.ok){
      const updatedBusiness = await response.json()
      dispatch(editBusinessAction(updatedBusiness))
      return updatedBusiness;
    }
};
// deleteBusiness
export const deleteBusinessThunk = (businessId) => async dispatch => {
    console.log('delete business think running, this is businessID: ', businessId)
    const response = await csrfFetch(`/api/businesses/${businessId}`, {
      method: 'DELETE',
      body: JSON.stringify({businessId})

    })
    if(response.ok){
        // const allBusinesses = await response.json();
        dispatch(deleteBusinessAction(businessId));
        return 'deleted';
    }
};

//rework to initialState = {allBusinesses: {}, currentBusiness: {}}
const initialState = {allBusinesses: {}, currentBusiness: {}};

const businessReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case GET_ALL_BUSINESSES: {
            newState = {...state, allBusinesses: {...state.allBusinesses}, currentBusiness: {...state.currentBusiness}}
            action.businesses.forEach(business => {
                newState.allBusinesses[business.id] = business
            })
            return newState
        }

        case GET_ONE_BUSINESS: {
            newState = {...state, allBusinesses: {...state.allBusinesses}, currentBusiness: {...state.currentBusiness}}
            newState.currentBusiness = action.business
            return newState
        }

        case EDIT_BUSINESS: {
            newState = {...state, allBusinesses: {...state.allBusinesses}, currentBusiness: {...state.currentBusiness}}
            newState.allBusinesses[action.editedBusiness.id] = action.editedBusiness
            newState.currentBusiness = action.editedBusiness
            return newState
        }

        case CREATE_BUSINESS: {
            newState = {...state, allBusinesses: {...state.allBusinesses}, currentBusiness: {...state.currentBusiness}}
            newState.allBusinesses[action.createdBusiness.id] = action.createdBusiness
            newState.currentBusiness[action.createdBusiness.id] = action.createdBusiness
            return newState
        }

        case DELETE_BUSINESS: {
            newState = {...state, allBusinesses: {...state.allBusinesses}, currentBusiness: {...state.currentBusiness}}
            delete newState.allBusinesses[action.id]
            delete newState.currentBusiness[action.id]
            return newState
        }

        case CLEAR_CURRENT_BUSINESS: {
            newState = {...state, allBusinesses: {...state.allBusinesses}, currentBusiness: {...state.currentBusiness}}
            newState.currentBusiness = {}
            return newState
        }

        case CLEAR_ALL_BUSINESSES: {
            newState = {...state, allBusinesses: {...state.allBusinesses}, currentBusiness: {...state.currentBusiness}}
            newState.allBusinesses = {}
            return newState
        }
        default:
            return state
    }
}


export default businessReducer;
