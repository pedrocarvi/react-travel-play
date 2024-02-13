// import React from "react";
// import { useLocation } from "react-router-dom";
// import PostCard from "../PostCard/PostCard";
// import PostsService from "../../services/PostsService";
// import './postslist.css';

// function PostsList() {

//   // consigo la categoria segun la url
//   const location = useLocation();
//   const category = location.pathname.split("/categories/")[1];

//   // consume x ep segun si existe o no la categoria. averiguar si hay manera mas sencilla.
//   const getPosts = () => {
//     if (category) {
//       return PostsService.getPostsByCategory(category);
//     } else {
//       return PostsService.getPosts();
//     }
//   };

//   return (
//     <div className="posts-container d-flex justify-content-start align-items-center flex-wrap gap-3 pt-0 mt-0">
//       {getPosts().map((post, index) => (
//         <PostCard key={index} postdata={post}></PostCard>
//       ))}
//     </div>
//   );
// }

// export default PostsList;

import React, { useState, useEffect } from 'react';
import apiService from '../../services/apiservice';
import PostCard from "../PostCard/PostCard";

function PostsList() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await apiService.getAllPosts();
        setPosts(postsData);
      } catch (error) {
        console.error('Error al obtener los posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="posts-container d-flex justify-content-start align-items-center flex-wrap gap-3 pt-0 mt-0">
      {posts.map((post, index) => (
        <PostCard key={index} postdata={post}></PostCard>
      ))}
    </div>
  );
}

export default PostsList;



