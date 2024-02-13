import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import apiService from '../../services/apiservice';
import './addpostcomponent.css'

const AddPostComponent = () => {

    const [data, setData] = useState('');
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        formFile: null,
        title: '',
        description: '',
    });

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'formFile' ? files[0] : value
        }));
    };

    const handlePostData = async (e) => {
        e.preventDefault()
        try {
            const postData = {
                "pictured": [
                    "https://images.pagina12.com.ar/styles/focal_content_1200x1050/public/2023-06/739606-pelota-202-0.jpg?h=e5aec6c8&itok=vzQGAtA3"
                ],
                "pictured_fav": "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-01/wembley-stadium-empty-england-012622_l2lwgevxlerk1kfr8ouep1f9k.jpg?itok=9N_9Ubgw",
                "name_posted": formData.title,
                "description": formData.description,
                "locationX": " -40.88519",
                "locationY": "-43.28506",
                "uuserId": 1
            };
            const result = await apiService.postData(postData);
            console.log(result)
            setData(result);
        } catch (error) {
            setError('Hubo un error al realizar la llamada a la API');
        }
    };

    return (
        <div className='addpost-container'>
            <h3>Add new post</h3>
            <Form onSubmit={handlePostData} id='addpost-form'>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" name="title" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter description" name="description" onChange={handleInputChange} />
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
