import React, { useState } from 'react';
import apiService from '../../services/apiservice';
import './addpostcomponent.css'

const AddPostComponent = () => {

    const [formData, setFormData] = useState({
        picture_fav: '',
        pictured: [],
        name_posted: '',
        description: '',
        posted_fav: false,
        category: '',
        locationX: '',
        locationY: '',
        uuserId: 1
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
        try {
            const result = await apiService.postData(formData);
            console.log(result);
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
                    <label htmlFor="picture_fav" className="form-label">Picture</label>
                    <input type="file" className="form-control" id="picture_fav" name="picture_fav" onChange={handleChange} accept="image/*" />
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
                        <option value="Elders">Elders</option>
                        <option value="Public">Public</option>
                    </select>
                </div>

                {/* Cancelar y enviar formulario */}
                <div className="addpost-btns-container">
                    <button type="button" className="btn btn-outline" id='addpost-cancel-btn'>
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-primary" id='addpost-btn'>
                        Add new
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPostComponent;