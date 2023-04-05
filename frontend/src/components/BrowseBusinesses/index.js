import { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllBusinessesThunk } from '../../store/businesses';
import { Footer } from '../Footer';
import './BrowseBusiness.css'



export const BrowseBusinesses = () => {
    console.log('Browse Business conponent running')

    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user)

    const allBusinessesObj = useSelector(state => {
        console.log('allBusinessObj useSelector running, this is state: ', state)
        return state.businesses.allBusinesses});

    const allBusinessesArr = Object.values(allBusinessesObj)
    console.log('this is allBusinessesArr in Browse Businesses: ', allBusinessesArr)

    useEffect(() => {
        console.log('Browse Businesses useEffect running')
        dispatch(getAllBusinessesThunk())

        return () => {console.log('Browse Business useEffect return running')}
    }, [dispatch]);

    if (!allBusinessesArr.length) {
        console.log('if !allBusinessArr.legnth is running, this should happen on initialy load because the component doesnt have data. to prevent an error, we have this guard clause')
        return <div className="loading">Loading</div>
    }

        return(
            <div className="browse-business-container">
                {console.log('start of jsx running in the return')}
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
                        {allBusinessesArr.map(business => {
                            return (
                                        <div key={`all-businesses-1-${business.id}`} className="business-card">
                                            <Link key={`all-businesses-2-${business.id}`} className='b-link' to={`/businesses/${business?.id}` }>
                                                <img key={`all-businesses-3-${business.id}`} className="b-img" src={business.imgUrl} alt='business' />
                                                <div key={`all-businesses-4-${business.id}`} className="b-title card-text" >{business.title}</div>
                                            </Link>
                                            <div key={`all-businesses-5-${business.id}`} className="b-category card-text" >{business.category}</div>
                                            <div key={`all-businesses-6-${business.id}`} className="b-location card-text" >{`${business.city}, ${business.state}`}</div>
                                        </div>
                            )
                        })}

                    </div>
                    {user && user.id? (<div className="add-business-btn-container">
                        <Link to='/addbusinesses/new'>
                            <button className='add-business-btn'>Add A Business</button>
                            </Link>
                    </div>): <div className='noticeToLogIn' >Log in to Create a Business</div>}
                    <div className="recent-collections">

                    </div>
                    <div className="recent-activity">

                    </div>
                    <Footer />
                </div>
                {console.log('end of jsx running in the return')}
            </div>
        );
}
