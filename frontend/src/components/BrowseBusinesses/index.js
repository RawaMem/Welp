import { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listOfAllBusinesses } from '../../store/businesses';
import { Footer } from '../Footer';
import './BrowseBusiness.css'



export const BrowseBusinesses = () => {

    const dispatch = useDispatch();
    const listOfBusinesses = useSelector(state => {
        return state.businesses.list
    });

    useEffect(() => {
        dispatch(listOfAllBusinesses())
    }, [dispatch]);

        return(
            <div className="browse-business-container">
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
                        <h2 className="location-title">Welp Newport Beach</h2>
                        <div className="cities">
                            <p className="cities-name">Irvine</p>
                            <p className="cities-name">Austin</p>
                            <p className="cities-name">Dallas</p>
                            <p className="cities-name">Houston</p>
                            <p className="cities-name">San Antonio</p>
                            <p className="cities-name">San Francisco</p>
                            <p className="cities-name">New York</p>
                            <p className="cities-name">San Jose</p>
                            <p className="cities-name">Los Angeles</p>
                            <p className="cities-name">Chicago</p>
                        </div>

                    </div>
                    <div className="new-businesses">
                        {listOfBusinesses.map(business => {
                            return (
                                <>
                                        <div className="business-card">
                                            <Link className='b-link' to={`/businesses/${business.id}` }>
                                                <img className="b-img" src={business.imgUrl} alt='business' />
                                                <div className="b-title card-text" >{business.title}</div>
                                            </Link>
                                            <div className="b-category card-text" >{business.category}</div>
                                            <div className="b-location card-text" >{`${business.city}, ${business.state}`}</div>
                                        </div>
                                </>

                            )
                        })}

                    </div>
                    <div className="recent-collections">

                    </div>
                    <div className="recent-activity">

                    </div>
                    <Footer />
                </div>
            </div>
        );
}
