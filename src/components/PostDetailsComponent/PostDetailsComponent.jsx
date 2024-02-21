import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import apiService from '../../services/apiservice';
import { Button } from 'react-bootstrap';
import './postdetailscomponent.css'

const PostDetailsPage = () => {
    // const { id } = useParams();
    // const [post, setPost] = useState(null);
    // const [comments, setComments] = useState([])
    // const [commentText, setCommentText] = useState('');
    // const [commentStatus, setCommentStatus] = useState({
    //     loading: false,
    //     error: null
    // });

    // useEffect(() => {
    //     const fetchPost = async () => {
    //         try {
    //             const postData = await apiService.getPostById(id);
    //             setPost(postData);
    //             const allCommentsData = await apiService.getAllComments();
    //             const postComments = allCommentsData.filter(comment => comment.postedId === parseInt(id));
    //             setComments(postComments);
    //         } catch (error) {
    //             console.error('Error al obtener el post:', error);
    //         }
    //     };
    //     fetchPost();
    // }, [id]);

    // const handleCopyUrlToClipboard = () => {
    //     const currentUrl = window.location.href;
    //     navigator.clipboard.writeText(currentUrl)
    //         .then(() => {
    //             console.log("URL copiada al portapapeles:", currentUrl);
    //             alert("URL copiada al portapapeles");
    //         })
    //         .catch((error) => {
    //             console.error("Error al copiar la URL al portapapeles:", error);
    //             alert("Error al copiar la URL al portapapeles");
    //         });
    // };

    // const handleCommentSubmit = async () => {
    //     try {
    //         setCommentStatus({ loading: true, error: null });
    //         const userId = localStorage.getItem('user_id');
    //         const newComment = {
    //             uuserId: userId,
    //             comment: commentText,
    //             postedId: post.postedId // Assuming post object has postedId property
    //         };
    //         await apiService.postComment(newComment);
    //         setCommentText('');
    //         setCommentStatus({ loading: false, error: null });
    //         // Optionally, you can fetch updated post data here to refresh the comments
    //     } catch (error) {
    //         setCommentStatus({ loading: false, error: error.message });
    //     }
    // };

    // if (!post) {
    //     return <div>No se encontró la publicación</div>;
    // }

    return (
        // <div className='postdetails-container'>
        //     <div className="postdetails-img" style={{ backgroundImage: `url(${post.pictured_fav})` }}></div>
        //     <h3> {post.name_posted} </h3>
        //     <h6> {post.category}</h6>
        //     <p> {post.description}</p>
        //     <div>
        //         <Link to={`/profile/${post.uuserId}`} >
        //             <Button variant="primary">Ver Perfil</Button>
        //         </Link>
        //         <Button variant="primary">Guardar</Button>
        //         <Button variant="success" onClick={handleCopyUrlToClipboard}>Compartir</Button>
        //     </div>
        //     <div>
        //         <textarea
        //             rows="4"
        //             cols="50"
        //             value={commentText}
        //             onChange={(e) => setCommentText(e.target.value)}
        //         />
        //         <Button variant="primary" onClick={handleCommentSubmit} disabled={commentStatus.loading}>
        //             {commentStatus.loading ? 'Enviando...' : 'Enviar Comentario'}
        //         </Button>
        //         {commentStatus.error && <div>Error: {commentStatus.error}</div>}
        //     </div>
        //     <div>
        //         <h4>Comentarios</h4>
        //         {comments.map((comment) => (
        //             <div key={comment.commentId}>
        //                 <p>{comment.the_comment}</p>
        //             </div>
        //         ))}
        //     </div>
        // </div>
        <div className='postdetails-container'>
            <div className="container info-container w-50">
                <div className="postdetails-img" style={{ backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/4/42/Football_in_Bloomington%2C_Indiana%2C_1995.jpg")` }}></div>
                <h3> Torneo de futbol </h3>
                <h6> Deportes </h6>
                <p> Sumate a nuestro evento! Habra de todo, juegos, parrila, torneo, y mucho mas!</p>
                <p> Ubicacion: Luis Maria Drago 730, Rosario, Santa Fe</p>
                <div className='btns-container'>
                    <Button variant="primary">Ver Perfil</Button>
                    <Button variant="primary">Guardar</Button>
                    <Button variant="success">Compartir</Button>
                </div>
            </div>
            <div className="container comment-container w-50">
                <h4>Comentarios</h4>
                <div className='commentInput-container'>
                    <textarea
                        rows="4"
                        cols="50"
                    />
                    <button className='btn btn-primary'> Enviar </button>
                </div>
                <div className='commentList-container'>
                    <div className='comment-card'>
                        <p> Juan Romero dice... </p>
                        <p> Este es el comentario 1</p>
                    </div>
                    <div className='comment-card'>
                        <p> Juan Romero dice... </p>
                        <p> Este es el comentario 1</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetailsPage;
