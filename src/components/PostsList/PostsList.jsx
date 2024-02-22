import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import apiService from '../../services/apiservice';
import PostCard from "../PostCard/PostCard";
import noPostsImg from '../../assets/images/noposts.png'
import './postslist.css'

function PostsList() {
  const location = useLocation();
  const category = location.pathname.split("/categories/")[1];
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await apiService.getAllPosts();
        console.log("post data postlist", postsData)
        if (category !== undefined) {
          const postsDataFiltered = postsData.filter(el => el.category === category)
          setPosts(postsDataFiltered);
        } else {
          setPosts(postsData);
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
        <div className='noPosts-container'>
          <h3> We couldn't find any post </h3>
          <p> Create one yourself!</p>
          <img src={noPostsImg} alt="We could not find any post!" width={200} />
        </div>
      ) : (
        <div className="posts-container">
          {posts.map((post) => (
            <PostCard key={post.postedId} postdata={post}></PostCard>
          ))}
        </div>
      )}
    </>
  );
}

export default PostsList;