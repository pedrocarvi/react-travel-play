import "./postcard.css"
import { Link } from "react-router-dom";
import apiService from "../../services/apiservice";
import { ToastContainer, toast } from "react-toastify";

function PostCard({ postdata }) {

  const handleFavorite = async (e) => {
    e.preventDefault();
    console.log("Info del post: ", postdata)

    // Construct the data object for the PUT request
    const body = {
      "pictured": postdata.pictured,
      "pictured_fav": postdata.pictured_fav,
      "name_posted": postdata.name_posted,
      "description": postdata.description,
      "category": postdata.category,
      "posted_fav": true,
      "locationX": postdata.locationX,
      "locationY": postdata.locationY
    };

    try {
      const postId = postdata.postedId;
      console.log("body: ", body)
      console.log("id del post: ", postId)
      // Call the putPost function with the postId and postData
      const result = await apiService.updatePost(postId, body);
      if (result) {
        toast.success('¡El posteo se añadio a tus favoritos!');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error al actualizar el posteo');
    }
  }

  return (
    <div className="card" key={postdata.postedId}>
      <div className="card__img" style={{ backgroundImage: `url(${postdata.pictured_fav})` }}>
        <Link to={`/categories/${postdata.category}`} style={{ color: 'black' }}>
          <span className="card__span">{postdata.category}</span>
        </Link>

      </div>
      <div className="card-int">
        <p className="card-int__title"> {postdata.name_posted} </p>
        <p className="card-description"> {postdata.description}</p>
        <Link to={`/post-details/${postdata.postedId}`}>
          <button className="postcard-btn"> View more</button>
        </Link>
        <button onClick={handleFavorite}> Añadir a favorito </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default PostCard;
