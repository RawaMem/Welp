import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink, Route, useParams } from 'react-router-dom';
import { listOfAllBusinesses } from '../../store/businesses';



export const BrowseBusinesses = () => {

const dispatch = useDispatch();
const listOfBusinesses = useSelector(state => {
    console.log(`==========>`,state);
    return state.businesses.list



})



console.log(`============>`, listOfBusinesses);

useEffect(() => {
    dispatch(listOfAllBusinesses())
    console.log(`-=======> useEffect running`);
}, [dispatch])

    return(
        <>
            <div className="searchbar-container">
                <div className="nav-bar">

                </div>
                <div className="logo">

                </div>
                <div className="searchbar">

                </div>
                <div className="categories">

                </div>
                <div className="photo-credit">

                </div>
            </div>
            <div className="best-businesses-container">

            </div>
            <div className="main-body">
                <div className="location-cities">

                </div>
                <div className="new-businesses">
                    {listOfBusinesses.map(business => {
                        return (
                            <div className="business-card">
                                <div className="b-img">{business.imgUrl}</div>
                                <div className="b-title">{business.title}</div>
                                <div className="b-description">{business.description}</div>
                                <div className="b-location">{`${business.city}, ${business.state}`}</div>
                            </div>

                        )
                    })}

                </div>
                <div className="recent-collections">

                </div>
                <div className="recent-activity">

                </div>
            </div>
        </>
    );
}
