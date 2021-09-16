import { csrfFetch } from "./csrf";
const GET_ALL_BUSINESSES = 'businesses/getAllBusinesses';
const GET_ONE_BUSINESS = 'businesses/getOneBusiness';
const EDIT_BUSINESS = `businesses/editBusiness`;
const ADD_BUSINESS = `businesses/addBusiness`;
const DELETE_BUSINESS = `businesses/deleteBusiness`


const getAllBusinesses = list => ({
    type: GET_ALL_BUSINESSES,
    list
});

const oneBusinessDetails = details => ({
    type: GET_ONE_BUSINESS,
    details
});

const editBusinesses = details => ({
    type: EDIT_BUSINESS,
    details
});

const addBusinesses = details => ({
    type: ADD_BUSINESS,
    details
});

const destroyBusiness = id => ({
    type: DELETE_BUSINESS,
    id
});

export  const listOfAllBusinesses = () => async dispatch => {
    const response = await csrfFetch(`/api/businesses`);

    if (response.ok) {
        const list = await response.json();
        dispatch(getAllBusinesses(list));
    }
};

export const getOneBusiness = (businessId) => async dispatch => {
    const response = await csrfFetch(`/api/businesses/${businessId}`);

    if (response.ok) {
        const details = await response.json();
        dispatch(oneBusinessDetails(details));
    }
};


export const createBusiness = (businessDetails) => async dispatch => {
    const response = await csrfFetch('/api/businesses', {
      method: 'POST',
      body: JSON.stringify(businessDetails)
    })
    if(response.ok){
      const newBusiness = await response.json()
      dispatch(addBusinesses(newBusiness))
      return newBusiness;
    }
};


export const editBusinessDetails = (businessDetails, businessId) => async dispatch => {
    const response = await csrfFetch(`/api/businesses/${businessId}`, {
      method: 'PUT',
      body: JSON.stringify(businessDetails)
    })
    if(response.ok){
      const updatedBusiness = await response.json()
      dispatch(editBusinesses(updatedBusiness))
      return updatedBusiness;
    }
};

export const deleteBusiness = (businessId) => async dispatch => {
    const response = await csrfFetch(`/api/businesses/${businessId}`, {
      method: 'DELETE',
      body: JSON.stringify(businessId)

    })
    if(response.ok){
      const updatedBusiness = await response.json()
      dispatch(destroyBusiness(updatedBusiness))
      return 'deleted';
    }
};


const initialState = {list: [], currentBusiness: []};

const businessReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_BUSINESSES: {
            const allBusinesses = action.list
            newState = {
                list: allBusinesses,
                currentBusiness: []
            }
            return newState
        }
        case GET_ONE_BUSINESS: {
            newState = {...state}
            newState.currentBusiness = action.details
            return newState
        }
        case EDIT_BUSINESS: {
            newState = {...state};
            let newBusinessList = newState.list.map(business => {
                if (business.id === action.details.id) {
                    return action.detail;
                } else {
                    return business;
                }
            });
            newState = {
                list: newBusinessList
            }
            return newState
        }
        case ADD_BUSINESS: {
            newState = {...state};
            newState.list.push(action.details)
            return newState;
        }

        case DELETE_BUSINESS: {
            newState = {...state};
            let newBusinessList = newState.list.map(business => {
                if (business.id !== action.details.id) {
                    return business;
                }
                return null;
            });
            newState = {
                list: newBusinessList
            }
            return newState
        }
        default:
            return state
    }
}

export default businessReducer;
