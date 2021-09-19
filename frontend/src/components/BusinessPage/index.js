import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';
import { deleteBusiness, getOneBusiness, listOfAllBusinesses } from '../../store/businesses';
import { allReviewsForBusiness, deleteUserReview } from '../../store/reviews';
import { BrowseBusinesses } from '../BrowseBusinesses';
import './BusinessPage.css';


export const BusinessPage = () => {
    const dispatch = useDispatch();
    const {businessId} = useParams();
    const history = useHistory();
    const [hideMe, setHideMe] = useState('')

    // const [deleteId, setDeleteId] = useState(businessId)

    const AllBusiness = useSelector(state => {
        return state.businesses.list
    });

    const currentBusiness = AllBusiness.find(business => {
        return +businessId === business.id
    })


    const userId = useSelector(state => {
        return state.session.user?.id
    });

    const reviewList = useSelector(state => {
        return state.reviews?.list
    })

    useEffect(() => {
        dispatch(listOfAllBusinesses())
        // dispatch(allReviewsForBusiness())
    }, [dispatch]);

    useEffect(() => {
        dispatch(allReviewsForBusiness())
    }, [dispatch, businessId]);



    const businessReviews = reviewList?.filter(review => review.businessId === +businessId)

    const [userReview] = businessReviews?.filter(review => review?.userId === +userId);
    console.log('=========>', businessReviews);
    console.log('=========>', userReview);


    const deleteThisBusiness = (e) => {
        e.preventDefault();
        dispatch(deleteBusiness(businessId));
        history.push(`/`);
    }

    const deleteThisReview = (e) => {
        e.preventDefault();
        dispatch(deleteUserReview(e.target.value));
        history.push(`/businesses/${businessId}`);
    }

    // const conditional = +review?.userId === +userId && +review?.businessId === +businessId;

    return(
        <>
            <div className="page-container">
                <div className="detail-container">
                    <div className="business-details">
                        <div className="img-encapsule">
                            <img className="bp-image" src={currentBusiness?.imgUrl} alt='currentBusiness'/>
                        </div>
                            <div className="bp-title">{currentBusiness?.title}</div>
                        <div className="b-description">{currentBusiness?.description}</div>
                        <div className="b-location">{`${currentBusiness?.city}, ${currentBusiness?.state}`}</div>
                    </div>
                </div>

                <div className="user-business-options">
                {!userReview && userId &&
                (<Link className={hideMe} to={`/businesses/${currentBusiness?.id}/reviews/new`}>
                    <button className="add-review-button red-hover-effect">Write A Review</button>
                </Link>)
                }
                    <Link to={`/businesses/${currentBusiness?.id}/edit`}>
                        <button className="edit-btn red-hover-effect">Edit Business</button>
                    </Link>
                    <button className="delete-btn red-hover-effect" onClick={deleteThisBusiness}>Delete Business</button>
                </div>

                {/* <div className="user-review">
                {reviewList.map(review => {
                        return (
                            +review?.businessId === +businessId && +review?.userId === +userId ? (
                            <>
                                <div className="r-container">
                                    <div className="rating"><p>{review.rating}</p></div>
                                    <div className="content"><p>{review.content}</p></div>
                                </div>
                            </>
                            ) : false
                        )
                    })}
                    note: this code
                </div> */}

                <div className="review-container">
                    {reviewList.map(review => {
                        return (
                            +review?.businessId === +businessId ? (
                            <>
                                <div className="r-container">
                                    <div className="rating"><p>{review.rating}</p></div>
                                    <div className="content"><p>{review.content}</p></div>
                                </div>
                                {userId && userId === review?.userId &&
                                (<Link to={`/businesses/${businessId}/reviews/${review?.id}/edit`}>
                                    <button value={review.id} className="review-edit">Edit</button>
                                </Link>)
                                }
                                {userId && userId === review?.userId &&
                                (<button value={review.id} className="review-delete" onClick={deleteThisReview}>Delete</button>)
                                }
                            </>
                            ) : false

                        )
                    })}
                </div>
            </div>

        </>
    )

}
