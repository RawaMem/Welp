import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';
import { deleteBusiness, getOneBusiness, listOfAllBusinesses } from '../../store/businesses';
import { BrowseBusinesses } from '../BrowseBusinesses';


export const BusinessPage = () => {

    const dispatch = useDispatch();
    const {businessId} = useParams();
    const history = useHistory();

    // const [deleteId, setDeleteId] = useState(businessId)

    const AllBusiness = useSelector(state => {
        return state.businesses.list
    });
    const currentBusiness = AllBusiness.find(business => {
        return +businessId === business.id
    })
    console.log('=======>', currentBusiness)

    const userId = useSelector(state => {
        return state.session.user.id
    });

    useEffect(() => {
        dispatch(listOfAllBusinesses())
    }, [dispatch]);

    // useEffect(() => {
    //     dispatch(getOneBusiness(businessId))
    // }, [dispatch, businessId, currentBusiness]);

    // useEffect(() => {
    //     dispatch(deleteBusiness(deleteId))
    // }, [deleteId, dispatch])

    console.log('=================>', currentBusiness);

    const deleteThisBusiness = (e) => {
        // e.preventDefault();
        dispatch(deleteThisBusiness(businessId));
        // if (deleted) {
        //     history.push(`/`);
        //   }
    }

    return(
        <>
            <div className="page-container">
                <div className="business-card">
                    <img className="b-img" src={currentBusiness?.imgUrl} alt='currentBusiness'/>
                    <div className="b-title">{currentBusiness?.title}</div>
                    <div className="b-description">{currentBusiness?.description}</div>
                    <div className="b-location">{`${currentBusiness?.city}, ${currentBusiness?.state}`}</div>
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
