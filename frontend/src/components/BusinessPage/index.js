import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink, Route, useParams, Link } from 'react-router-dom';
import { getOneBusiness } from '../../store/businesses';


export const BusinessPage = () => {

    const dispatch = useDispatch();
    const currentBusiness = useSelector(state => {
        return state.businesses.currentBusiness
    });

    const userId = useSelector(state => {
        return state.session.user.id
    });

    console.log(`==========>Session`, session);

    const {businessId} = useParams();


    useEffect(() => {
        dispatch(getOneBusiness(businessId))
    }, [dispatch]);


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
