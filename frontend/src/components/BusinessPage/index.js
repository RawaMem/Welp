import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';
import { deleteBusinessThunk, getOneBusinessThunk, clearCurrentBusinessAction } from '../../store/businesses';
import { allReviewsForBusinessThunk, clearAllReviewsAction, deleteReviewThunk } from '../../store/reviews';
import { Footer } from '../Footer';
import './BusinessPage.css';


export const BusinessPage = () => {
    const dispatch = useDispatch();
    const {businessId} = useParams();
    const history = useHistory();

    const businessObj = useSelector(state => state.businesses.currentBusiness);

    const userId = useSelector(state => {
        return state.session.user?.id
    });

    const allReviews = useSelector(state => state.reviews.allReviews)
    const businessReviews = Object.values(allReviews)

    useEffect(() => {
        dispatch(getOneBusinessThunk(businessId))
        dispatch(allReviewsForBusinessThunk(businessId))

        return () => {
            dispatch(clearCurrentBusinessAction())
            dispatch(clearAllReviewsAction())
        }
    }, [dispatch, businessId]);


    if (!businessObj) return <div className="loading">loading</div>


    let reviewSum = 0;
    businessReviews?.forEach(review => {
        reviewSum = reviewSum + review.rating
    });
    let aveRating = Math.round((reviewSum / businessReviews?.length) *10) /10

    const [userReview] = businessReviews?.filter(review => review?.userId === +userId);

    const deleteThisBusiness = async (e) => {
        e.preventDefault();
        const deleted = await dispatch(deleteBusinessThunk(businessId));
        if (deleted){
            history.push(`/`);
        }
    }

    const deleteThisReview = (e) => {
        e.preventDefault();
        dispatch(deleteReviewThunk(userReview.id));
    }


    return(
        <>
            <div className="page-container">
                        <div className="img-encapsule">
                            <img className="bp-image" src={businessObj?.imgUrl} alt='businessObj'/>
                        </div>
                <div className="detail-container">
                    <div className="business-details">
                        <div className="bp-title">{businessObj?.title}</div>
                        {!Number.isNaN(aveRating) && (
                        <div className="bp-rating">Average Rating: <span className='review-rating-number'>{aveRating}</span></div>)}
                        <div className="b-category">{businessObj?.category}</div>
                        <div className="b-description">{businessObj?.description}</div>
                        <div className="b-location">{`${businessObj?.address}, ${businessObj?.city}, ${businessObj?.state} ${businessObj?.zipCode}`}</div>
                    </div>

                    <div className="user-business-options">
                    {!userReview && userId &&
                    (<Link to={`/businesses/${businessObj?.id}/reviews/new`}>
                        <button className="add-review-button red-hover-effect">Write A Review</button>
                    </Link>)
                    }
                    {userId && userId === businessObj?.ownerId && (
                        <>
                        <Link to={`/businesses/${businessObj?.id}/edit`}>
                            <button className="edit-btn red-hover-effect">Edit Business</button>
                        </Link>
                        <button className="delete-btn red-hover-effect" onClick={deleteThisBusiness}>Delete Business</button>
                        </>
                        )}
                    </div>


                    <div className="review-container">
                        {businessReviews.map(review => {
                            return (
                                +review?.businessId === +businessId ? (
                                    <div key={`business-review-map-1-${review.id}`} className="r-container">
                                        <div key={`business-review-map-2-${review.id}`} className="review-username"><p>{review?.User?.username}</p></div>
                                        <div key={`business-review-map-3-${review.id}`} className="rating"><p>Rating: <span key={`business-review-map-4-${review.id}`} className='review-rating-number'>{review.rating}</span></p></div>
                                        <div key={`business-review-map-5-${review.id}`} className="content"><p>{review.content}</p></div>
                                        {userId && userId === review?.userId &&
                                        (<Link to={`/businesses/${businessId}/reviews/${review?.id}/edit`}>
                                            <button value={review.id} key={`business-review-map-6-${review.id}`} className="review-edit red-hover-effect">Edit</button>
                                        </Link>)
                                        }
                                        {userId && userId === review?.userId &&
                                        (<button value={review.id} key={`business-review-map-7-${review.id}`} className="review-delete red-hover-effect" onClick={deleteThisReview}>Delete</button>)
                                        }
                                    </div>
                                ) : false
                                )
                            })}
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )


}
