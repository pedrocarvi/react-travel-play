import React from 'react';
import { useParams } from 'react-router-dom';
import PostsService from '../../services/PostsService';
import { Button } from 'react-bootstrap';
import './postdetailscomponent.css'

const PostDetailsPage = ({ getPosts }) => {
    const { id } = useParams();
    const post = PostsService.getPostById(id)

    if (!post) {
        return <div>No se encontró la publicación</div>;
    }

    return (
        <div className='postdetails-container'>
            <div className="postdetails-img" style={{ backgroundImage: `url(${post.image})` }}></div>
            <h3> {post.title} </h3>
            <h6> {post.category}</h6>
            <p> {post.description}</p>
            <div>
                <Button variant="primary">Ver Perfil</Button>{" "}
                <Button variant="primary">Guardar</Button>{" "}
                <Button variant="success">Compartir</Button>{" "}
            </div>
        </div>
    );
};


export default PostDetailsPage;
