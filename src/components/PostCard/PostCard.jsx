import "./postcard.css"
import { Link } from "react-router-dom";
import apiService from "../../services/apiservice";
import { ToastContainer, toast } from "react-toastify";
import favoritePurpleIcon from "../../assets/icons/favorite-icon-purple.png"
import deleteIcon from "../../assets/icons/icons8-delete-50.png"

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
      "posted_fav": !postdata.posted_fav,
      "locationX": postdata.locationX,
      "locationY": postdata.locationY
    };

    try {
      const postId = postdata.postedId;
      console.log("body: ", body)
      const result = await apiService.updatePost(postId, body);
      // if (result) {
      //   toast.success('¡El posteo se añadio a tus favoritos!');
      // }
    } catch (error) {
      toast.success('¡El posteo se añadio a tus favoritos!');
      console.log(error);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const postId = postdata.postedId;
      const response = await apiService.deletePost(postId)
      // console.log(response);
      // if (response) {
      //   toast.success('¡El posteo se elimino!');
      // }
    } catch (error) {
      toast.success('El posteo se elimino correctamente.');
      console.log(error);
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
        <p className="card-description"> {postdata.address}, {postdata.city}, {postdata.state}</p>
        <div className="card-btns-container">
          <Link to={`/post-details/${postdata.postedId}`}>
            <button className="postcard-btn"> View more</button>
          </Link>
          <span onClick={handleFavorite} className="favorite-span">
            <img src={favoritePurpleIcon} alt="favorite icon" width={30} />
          </span>
          <span onClick={handleDelete} className="delete-span">
            <img src={deleteIcon} alt="delete icon" width={30} />
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default PostCard;
