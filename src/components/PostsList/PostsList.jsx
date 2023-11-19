import PostCard from "../PostCard/PostCard";
import PostsService from "../../services/PostsService";
import './postslist.css'

function PostsList() {

  const getPosts = PostsService.getPosts()

  return (
    <div className="posts-container d-flex justify-content-start align-items-center flex-wrap gap-3 pt-0 mt-0">
      {
        getPosts.map((post, index) => (
          <PostCard key={index} postdata={post} ></PostCard>
        ))
      }
    </div>
  );
}

export default PostsList;
