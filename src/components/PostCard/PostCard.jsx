import "./postcard.css"
import { Link } from "react-router-dom";

function PostCard({ postdata }) {
  return (
    <div className="card" key={postdata.postedId}>
      <div className="card__img" style={{ backgroundImage: `url(${postdata.pictured_fav})` }}>
        <span className="card__span">{postdata.category}</span>
      </div>
      <div className="card-int">
        <p className="card-int__title"> {postdata.name_posted} </p>
        <p className="card-description"> {postdata.description}</p>
        <Link to={`/post-details/${postdata.postedId}`}>
          <button className="postcard-btn"> View more</button>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
