import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


export const AddReviewPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {businessId} = useParams();

    const userId = useSelector(state => {
        return state.session.user.id
    });

    const [userId, setUserId] = useState(userId);
    const [businessId, setBusinessId] = useState('');
    const [rating, setRating] = useState('');
    const [content, setContent] = useState('');

    const updateUserId = (e) => setUserId(e.target.value);
    const updateBusinessId = (e) => setBusinessId(e.target.value);
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

        let createdReview = await dispatch(createReview(payload))
        console.log(createdReview);
        if (createdReview) {
          history.push(`/businesses/${businessId}`);
        }
      };

      const handleCancelClick = (e) => {
        e.preventDefault();
      };

      return (
          
      )





}
