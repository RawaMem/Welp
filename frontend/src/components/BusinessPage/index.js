import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink, Route, useParams, Link } from 'react-router-dom';
import { listOfAllBusinesses } from '../../store/businesses';


export const BusinessPage = () => {

    const dispatch = useDispatch();
    const listOfBusinesses = useSelector(state => {
        return state.businesses.list
    });

    const {businessId} = useParams();
    const currentBusiness = listOfBusinesses.filter(business => {
        if (business.id === businessId) {
            return business
        }
    });


    useEffect(() => {
        dispatch(listOfAllBusinesses())
    }, [dispatch, listOfBusinesses]);

    console.log(`==========>`, listOfBusinesses);
    return(
        <>
        <div className="page-container">
            <div className="business-card">
                <img className="b-img" src={currentBusiness.imgUrl} alt='currentBusiness'/>
                <div className="b-title">{currentBusiness.title}</div>
                <div className="b-description">{currentBusiness.description}</div>
                <div className="b-location">{`${currentBusiness.city}, ${currentBusiness.state}`}</div>
            </div>
        </div>

        </>
    )






}
