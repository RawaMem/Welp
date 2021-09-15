import { csrfFetch } from "./csrf";
const GET_ALL_BUSINESSES = 'businesses/getAllBusinesses';
const GET_ONE_BUSINESS = 'businesses/getOneBusiness';


const getAllBusinesses = list => ({
    type: GET_ALL_BUSINESSES,
    list
});

const oneBusinessDetails = details => ({
    type: GET_ONE_BUSINESS,
    details
})


export  const listOfAllBusinesses = () => async dispatch => {
    const response = await csrfFetch(`/api/businesses`);
    console.log(`===========>`, response);

    if (response.ok) {
        const list = await response.json();
        console.log(`===========>`, list);
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

const initialState = {list: null};

const businessReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_BUSINESSES: {
            const allBusinesses = action.list
            newState.list = allBusinesses
            return newState
        }

        default:
            return state
    }

}

export default businessReducer;
