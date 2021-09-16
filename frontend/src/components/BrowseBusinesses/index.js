import { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listOfAllBusinesses } from '../../store/businesses';



export const BrowseBusinesses = () => {

    const dispatch = useDispatch();
    const listOfBusinesses = useSelector(state => {
        return state.businesses.list
    });

    useEffect(() => {
        dispatch(listOfAllBusinesses())
    }, [dispatch]);

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
                                <>
                                    <Link to={`/businesses/${business.id}` }>
                                        <div className="business-card">
                                            <img className="b-img" src={business.imgUrl} alt='business' />
                                            <div className="b-title" >{business.title}</div>
                                            <div className="b-description" >{business.description}</div>
                                            <div className="b-location" >{`${business.city}, ${business.state}`}</div>
                                        </div>
                                    </Link>
                                </>

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
