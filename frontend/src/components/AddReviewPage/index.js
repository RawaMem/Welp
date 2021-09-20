import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createReview } from '../../store/reviews';
import { Footer } from '../Footer';
import '../EditReview/EditReview.css';
import { listOfAllBusinesses } from '../../store/businesses';


export const AddReviewPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {businessId} = useParams();

    const userId = useSelector(state => {
        return state.session.user?.id
    });

    const [rating, setRating] = useState('');
    const [content, setContent] = useState('');

    const AllBusiness = useSelector(state => {
        return state.businesses.list
    });

    const currentBusiness = AllBusiness.find(business => {
        return +businessId === business.id
    })

    useEffect(() => {
        dispatch(listOfAllBusinesses())
    }, [dispatch]);

    const updateRating = (e) => setRating(e.target.value);
    const updateContent = (e) => setContent(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            userId,
            businessId,
            rating,
            content,
        };

        dispatch(createReview(payload))

        history.push(`/businesses/${businessId}`);
      };

      return (
        <section className="form">
            <h2 className="review-business-title">{currentBusiness?.title}</h2>
            <form onSubmit={handleSubmit}>
                <div className="r-box-form">
                    <input
                        type="hidden"
                        min="1"
                        required
                        value={userId}
                        />
                    <input
                        type="hidden"
                        min="1"
                        required
                        value={businessId}
                        />
                        <select onChange={updateRating} className='r-box-rating'>
                        <option value="" disabled selected>Select Your Rating</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <textarea
                        type="text"
                        placeholder="Add your review here"
                        required
                        value={content}
                        onChange={updateContent}
                        className='r-box-content'/>
                </div>

            <button type="submit" className='r-box-btn'>Post Review</button>
            </form>
            <Footer />
        </section>

      );
}
