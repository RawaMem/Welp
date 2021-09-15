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

const deleteBusinesses = details => ({
    type: DELETE_BUSINESS,
    details
});

export  const listOfAllBusinesses = () => async dispatch => {
    const response = await csrfFetch(`/api/businesses`);

    if (response.ok) {
        const list = await response.json();
        dispatch(getAllBusinesses(list));
    }
};

export const getOneBusiness = (business) => async dispatch => {
    const response = await csrfFetch(`api/businesses/${business.id}`);

    if (response.ok) {
        const details = await response.json();
        dispatch(oneBusinessDetails(details));
    }
};









const initialState = {list: []};

const businessReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BUSINESSES: {
            const allBusinesses = action.list

            return {
                ...state,
                list: allBusinesses
            }
        }

        default:
            return state
    }

}

export default businessReducer;
