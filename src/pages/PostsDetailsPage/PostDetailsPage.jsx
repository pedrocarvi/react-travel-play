import React from "react";
import NavigationBar from "../../shared/Navbar/NavigationBar";
import PostDetailsComponent from "../../components/PostDetailsComponent/PostDetailsComponent";
import Footer from "../../shared/Footer/Footer";

const PostDetailsPage = () => {
  return (
    <div>
      <NavigationBar />
      <PostDetailsComponent />
      <Footer />
    </div>
  );
};

export default PostDetailsPage;
