import React from "react";
import NavigationBar from "../../shared/Navbar/NavigationBar";
import AddPostComponent from "../../components/AddPostComponent/AddPostComponent";
import Footer from "../../shared/Footer/Footer";

const AddPost = () => {
  return (
    <div>
      <NavigationBar />
      <AddPostComponent />
      <Footer />
    </div>
  );
};

export default AddPost;
