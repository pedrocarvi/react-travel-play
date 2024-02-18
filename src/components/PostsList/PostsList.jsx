import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import apiService from '../../services/apiservice';
import PostCard from "../PostCard/PostCard";

function PostsList() {
  const location = useLocation();
  const category = location.pathname.split("/categories/")[1];
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await apiService.getAllPosts();
        if (category !== undefined) {
          const postsDataFiltered = postsData.filter(el => el.category === category)
          setPosts(postsDataFiltered);
        } else {
          const popularPost = postsData.filter(el => el.posted_fav === true)
          setPosts(popularPost);
        }
      } catch (error) {
        console.error("Error al obtener las publicaciones:", error);
      }
    };

    fetchPosts();
  }, [category]);

  return (
    <>
      {posts.length === 0 ? (
        <p>No posts available. Create one!</p>
      ) : (
        <div className="posts-container d-flex justify-content-start align-items-center flex-wrap gap-3 pt-0 mt-0">
          {posts.map((post) => (
            <PostCard key={post.postedId} postdata={post}></PostCard>
          ))}
        </div>
      )}
    </>
  );
}

export default PostsList;