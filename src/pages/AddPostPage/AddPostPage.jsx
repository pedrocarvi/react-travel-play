import React from "react";
import NavigationBar from "../../shared/Navbar/NavigationBar";
import AddPostComponent from "../../components/AddPostComponent/AddPostComponent";
import Footer from "../../shared/Footer/Footer";

const AddPostPage = () => {
  return (
    <div>
      <NavigationBar />
      <AddPostComponent />
      <Footer />
    </div>
  );
};

export default AddPostPage;
