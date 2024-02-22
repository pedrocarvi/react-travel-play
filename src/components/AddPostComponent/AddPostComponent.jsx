import React, { useState } from 'react';
import apiService from '../../services/apiservice';
import './addpostcomponent.css'
import { ToastContainer, toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

const AddPostComponent = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        pictured: [],
        pictured_fav: '',
        name_posted: '',
        description: '',
        category: '',
        // address: '',
        // city: '',
        // state: '',
        posted_fav: false,
        uuserId: localStorage.getItem('user_id')
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const lowerCaseValue = name === 'category' ? value.toLowerCase() : value;
        setFormData({
            ...formData,
            [name]: lowerCaseValue
        });
    };


    const handlePostData = async (e) => {
        e.preventDefault();
        console.log("form data: ", formData)
        try {
            const result = await apiService.postData(formData);
            console.log(result)
            toast.success('¡El posteo se creó correctamente!');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <div className='addpost-container'>
            <h3>Add new post</h3>
            <form onSubmit={handlePostData} id='addpost-form'>

                {/* Imagen */}
                <div className="mb-3">
                    <label htmlFor="pictured_fav" className="form-label">Picture</label>
                    {/* <input type="file" className="form-control" id="pictured_fav" name="pictured_fav" onChange={handleChange} accept="image/*" /> */}
                    <input type="text" className="form-control" id="pictured_fav" placeholder="Enter image url" name="pictured_fav" onChange={handleChange} />
                </div>

                {/* Titulo */}
                <div className="mb-3">
                    <label htmlFor="name_posted" className="form-label">Title</label>
                    <input type="text" className="form-control" id="name_posted" placeholder="Enter title" name="name_posted" onChange={handleChange} />
                </div>

                {/* Descripcion */}
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" placeholder="Enter description" name="description" onChange={handleChange}></textarea>
                </div>

                {/* Address */}
                {/* <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter address" name="address" onChange={handleChange} />
                </div> */}

                {/* City */}
                {/* <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" placeholder="Enter city" name="city" onChange={handleChange} />
                </div> */}

                {/* State */}
                {/* <div className="mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <input type="text" className="form-control" id="state" placeholder="Enter state" name="state" onChange={handleChange} />
                </div> */}

                {/* Categoria */}
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select className="form-select" id="category" name="category" onChange={handleChange}>
                        <option value="">Select a category</option>
                        <option value="Food">Food</option>
                        <option value="Outdoors">Outdoors</option>
                        <option value="Sports">Sports</option>
                        <option value="Party">Party</option>
                        <option value="Music">Music</option>
                        <option value="Kids">Kids</option>
                        <option value="Public">Public</option>
                    </select>
                </div>

                {/* Cancelar y enviar formulario */}
                <div className="addpost-btns-container">
                    <Link to="/" className="link-to-login">
                        <button type="button" className="btn btn-outline" id='addpost-cancel-btn'>
                            Cancel
                        </button>
                    </Link>
                    <button type="submit" className="btn btn-primary" id='addpost-btn'>
                        Add new
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddPostComponent;