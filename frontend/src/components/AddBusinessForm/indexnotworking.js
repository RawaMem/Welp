// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { createBusinessThunk } from '../../store/businesses';
// import { Footer } from '../Footer';
// import '../EditBusinessForm/EditBusiness.css'

// export const AddBusinessForm = () => {
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const userId = useSelector(state => {
//         return state.session.user.id
//     });

//     const [ownerId, setOwnerId] = useState(userId);
//     const [title, setTitle] = useState('');
//     const [imgUrl, setImgUrl] = useState('');
//     const [category, setCategory] = useState('');
//     const [description, setDescription] = useState('');
//     const [address, setAddress] = useState('');
//     const [city, setCity] = useState('');
//     const [state, setState] = useState('');
//     const [zipCode, setZipCode] = useState('');

//     const updateTitle = (e) => setTitle(e.target.value);
//     const updateImgUrl = (e) => setImgUrl(e.target.value);
//     const updateCategory = (e) => setCategory(e.target.value);
//     const updateDescription = (e) => setDescription(e.target.value);
//     const updateAddress = (e) => setAddress(e.target.value);
//     const updateCity = (e) => setCity(e.target.value);
//     const updateState = (e) => setState(e.target.value);
//     const updateZipCode = (e) => setZipCode(e.target.value);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const payload = {
//             ownerId,
//             title,
//             imgUrl,
//             category,
//             description,
//             address,
//             city,
//             state,
//             zipCode
//         };

//         let createdBusiness = await dispatch(createBusinessThunk(payload))

//         if (createdBusiness) {
//             history.push(`/business/${createdBusiness.id}`);
//         }
//     };

//     return (
//         <section className="form-container">
//           <form className='form' onSubmit={handleSubmit}>
//             <input
//               type="hidden"
//               min="1"
//               required
//               value={userId}
//               />
//             <input
//               type="text"
//               placeholder="Business Name"
//               required
//               value={title}
//               onChange={updateTitle}
//               className='edit-business-input'/>
//             <input
//               type="text"
//               placeholder="Image URL"
//               required
//               value={imgUrl}
//               onChange={updateImgUrl}
//               className='edit-business-input' />
//               <select onChange={updateCategory}
//               className='edit-business-input'>
//                 <option value="" disabled selected>Category of Business</option>
//                 <option>'Restaurant'</option>
//                 <option>'Shopping'</option>
//                 <option>'Pets'</option>
//                 <option>'Health'</option>
//                 <option>'Hotel and Travel'</option>
//                 <option>'Financial Services'</option>
//                 <option>'Automotive'</option>
//                 <option>'Beauty and Spas'</option>
//                 <option>'Home Services'</option>
//             </select>
//             <input
//               type="text"
//               placeholder="Business Description"
//               value={description}
//               onChange={updateDescription}
//               className='edit-business-input' />
//             <input
//               type="text"
//               placeholder="Street Address"
//               value={address}
//               onChange={updateAddress}
//               className='edit-business-input' />
//             <input
//               type="text"
//               placeholder="City"
//               value={city}
//               onChange={updateCity}
//               className='edit-business-input' />
//             <input
//               type="text"
//               placeholder="State"
//               value={state}
//               onChange={updateState}
//               className='edit-business-input' />
//             <input
//               type="text"
//               placeholder="Zip Code"
//               value={zipCode}
//               onChange={updateZipCode}
//               className='edit-business-input' />

//             <button className='edit-business-btn' type="submit">Add Business</button>
//           </form>
//           <Footer />
//         </section>
//       );
// }
