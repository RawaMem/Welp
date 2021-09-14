
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
    const response = await fetch(`/api/businesses`);

    if (response.ok) {
        const list = await response.json();
        dispatch(getAllBusinesses(list));
    }
};

export const getOneBusiness = (business) => async dispatch => {
    const response = await fetch(`api/businesses/${business.id}`);

    if (response.ok) {
        const details = await response.json();
        dispatch(oneBusinessDetails(details));
    }
};
