import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { editReviewDetails } from '../../store/reviews';


export const EditReview = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {businessId} = useParams();
    const {reviewId} = useParams();

    const userId = useSelector(state => {
        return state.session.user?.id
    });

    const [rating, setRating] = useState('');
    const [content, setContent] = useState('');


    const updateRating = (e) => setRating(e.target.value);
    const updateContent = (e) => setContent(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            reviewId,
            userId,
            businessId,
            rating,
            content,
        };

        dispatch(editReviewDetails(payload))

        history.push(`/businesses/${businessId}`);

      };

      return (
        <section className="form">
            <form onSubmit={handleSubmit}>
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
                <select onChange={updateRating}>
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
                onChange={updateContent}/>

            <button type="submit">Post Review</button>
            </form>
        </section>

      );
}
