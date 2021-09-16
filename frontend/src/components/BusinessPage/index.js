import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { deleteBusiness, getOneBusiness } from '../../store/businesses';


export const BusinessPage = () => {

    const dispatch = useDispatch();
    const {businessId} = useParams();
    const [deleteId, setDeleteId] = useState(businessId)

    const currentBusiness = useSelector(state => {
        return state.businesses.currentBusiness
    });

    const userId = useSelector(state => {
        return state.session.user.id
    });



    useEffect(() => {
        dispatch(getOneBusiness(businessId))
    }, [dispatch, businessId, currentBusiness]);

    useEffect(() => {
        dispatch(deleteBusiness(deleteId))
    }, [deleteId, dispatch])

    console.log('=================>', currentBusiness);

    const deleteThisBusiness = () => setDeleteId(businessId);

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

            <div className="user-business-options">
                <Link to={`/businesses/${currentBusiness.id}/edit`}>
                    <button className="edit-btn">Edit Business</button>
                </Link>
                <button className="delete-btn" onClick={deleteThisBusiness}>Delete Business</button>
            </div>

        </>
    )

}
