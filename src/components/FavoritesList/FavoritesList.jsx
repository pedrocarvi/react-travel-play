import React from 'react'
import './favoriteslist.css'
import PostCard from '../PostCard/PostCard'
import { useEffect, useState } from 'react'
import apiService from '../../services/apiservice'
import noFavorites from '../../assets/images/online-romance.png'

const FavoritesList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsData = await apiService.getAllPosts();
                setPosts(postsData); // Update state with fetched posts
                console.log("post data postlist", postsData);
            } catch (error) {
                console.error("Error al obtener las publicaciones:", error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            {posts.length === 0 ? (
                <div className='noPosts-container'>
                    <h3> We could not find any favorite post </h3>
                    <p> Save your fav posts!</p>
                    <img src={noFavorites} alt="We could not find any post!" width={200} />
                </div>
            ) : (
                <div className='favoriteslist-container d-flex justify-content-start align-items-center flex-wrap gap-3 pt-0 mt-0'>
                    {posts.filter(p => p.posted_fav === true).map((p, index) => (
                        <PostCard key={index} postdata={p} />
                    ))}
                </div>
            )}
        </>
    );
};

export default FavoritesList