import "./postcard.css"
import { Link } from "react-router-dom";

function PostCard({ postdata }) {
  // Aquí verificamos si existen los valores necesarios para la imagen
  const backgroundImageStyle = postdata.title_picture && postdata.extension_picture && postdata.base64_picture
    ? { backgroundImage: `url(data:image/${postdata.extension_picture};base64,${postdata.base64_picture})` }
    : {};

  return (
    <div className="card" key={postdata.postedId}>
      <div className="card__img" style={backgroundImageStyle}>
        <Link to={`/categories/${postdata.category}`} style={{ color: 'black' }}>
          <span className="card__span">{postdata.category}</span>
        </Link>
      </div>
      <div className="card-int">
        <p className="card-int__title"> {postdata.name_posted} </p>
        <p className="card-description"> {postdata.description}</p>
        <p className="card-description"> {postdata.address}</p>
        <p className="card-description"> {postdata.city}</p>
        <p className="card-description"> {postdata.state}</p>
        <Link to={`/post-details/${postdata.postedId}`}>
          <button className="postcard-btn"> View more</button>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
