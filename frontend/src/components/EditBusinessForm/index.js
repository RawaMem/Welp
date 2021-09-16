import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { editBusinessDetails, getOneBusiness } from '../../store/businesses';

export const EditBusinessFrom = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const currentBusiness = useSelector(state => {
        return state.businesses.currentBusiness
    });
    console.log(currentBusiness)

    const userId = useSelector(state => {
        return state.session.user.id
    });

    const {businessId} = useParams();

    useEffect(() => {
        dispatch(getOneBusiness(businessId))
    }, [dispatch, businessId]);

    const [ownerId, setOwnerId] = useState(userId);
    const [title, setTitle] = useState(currentBusiness.title);
    const [imgUrl, setImgUrl] = useState(currentBusiness.imgUrl);
    const [category, setCategory] = useState(currentBusiness.category);
    const [description, setDescription] = useState(currentBusiness.description);
    const [address, setAddress] = useState(currentBusiness.address);
    const [city, setCity] = useState(currentBusiness.city);
    const [state, setState] = useState(currentBusiness.state);
    const [zipCode, setZipCode] = useState(currentBusiness.zipCode);

    const updateTitle = (e) => setTitle(e.target.value);
    const updateImgUrl = (e) => setImgUrl(e.target.value);
    const updateCategory = (e) => setCategory(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updateAddress = (e) => setAddress(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateState = (e) => setState(e.target.value);
    const updateZipCode = (e) => setZipCode(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            businessId,
            ownerId,
            title,
            imgUrl,
            category,
            description,
            address,
            city,
            state,
            zipCode,
        };

        let editedBusiness = await dispatch(editBusinessDetails(payload, businessId))
        console.log(editedBusiness);
        if (editedBusiness) {
          history.push(`/businesses/${editedBusiness.id}`);
        }
      };

      const handleCancelClick = (e) => {
        e.preventDefault();
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
              type="text"
              placeholder="Business Name"
              required
              value={title}
              onChange={updateTitle}/>
            <input
              type="text"
              placeholder="Image URL"
              required
              value={imgUrl}
              onChange={updateImgUrl} />
              <select onChange={updateCategory}>
                <option value="" disabled selected>Category of Business</option>
                <option>'Restaurant'</option>
                <option>'Shopping'</option>
                <option>'Pets'</option>
                <option>'Health'</option>
                <option>'Hotel and Travel'</option>
                <option>'Financial Services'</option>
                <option>'Automotive'</option>
                <option>'Beauty and Spas'</option>
                <option>'Home Services'</option>
            </select>
            <input
              type="text"
              placeholder="Business Description"
              value={description}
              onChange={updateDescription} />
            <input
              type="text"
              placeholder="Street Address"
              value={address}
              onChange={updateAddress} />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={updateCity} />
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={updateState} />
            <input
              type="text"
              placeholder="Zip Code"
              value={zipCode}
              onChange={updateZipCode} />

            <button type="submit">Edit Business</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
          </form>
        </section>
      );;
}
