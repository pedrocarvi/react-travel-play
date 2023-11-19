import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './addpostcomponent.css'

const AddPostComponent = () => {

    const [formData, setFormData] = useState({
        formFile: null,
        title: '',
        description: '',
        category: 'Food'
    });

    const categories = ['Food', 'Outdoors', 'Sports', 'Party', 'Music', 'Kids', 'Elders', 'Public'];

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'formFile' ? files[0] : value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className='addpost-container'>
            <h3>Add new post</h3>
            <Form onSubmit={handleFormSubmit} id='addpost-form'>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" name="formFile" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" name="title" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter description" name="description" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="options">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" name="category" onChange={handleInputChange}>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <div className="addpost-btns-container">
                    <Button variant="outline" id='addpost-cancel-btn'>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit" id='addpost-btn'>
                        Add new
                    </Button>
                </div>

            </Form>
        </div>
    );
};

export default AddPostComponent;
