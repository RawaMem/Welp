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
                <div className="bb-img-container">
                    <img src="https://images.unsplash.com/photo-1485686531765-ba63b07845a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2900&q=80" alt="food" className="bb-img" />
                </div>
                <div className="best-businesses-container">

                </div>
                <div className="main-body">
                    <div className="location-cities">
                        <h2 className="location-title">Yelp Newport Beach</h2>
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
                    <div className="add-business-btn-container">
                        <Link to='/addbusinesses/new'>
                            <button className='add-business-btn'>Add A Business</button>
                            </Link>
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
