import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink, Route, useParams, Link } from 'react-router-dom';
import { createBusiness, getOneBusiness } from '../../store/businesses';


export const AddBusinessForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const userId = useSelector(state => {
        return state.session.user.id
    });

    const [ownerId, setOwnerId] = useState(userId);
    const [title, setTitle] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');

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

        let createdBusiness = await dispatch(createBusiness(payload))
        console.log(createdBusiness);
        if (createdBusiness) {
          history.push(`/businesses/${createdBusiness.id}`);
        }
      };

      const handleCancelClick = (e) => {
        e.preventDefault();
      };


    return (
        <section className="new-form-holder centered middled">
          <form onSubmit={handleSubmit}>
            <input
              type="hidden"
              placeholder="Business Name"
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

            <button type="submit">Add A Business</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
          </form>
        </section>
      );;


}
