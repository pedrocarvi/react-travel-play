import React from "react";
import './homepage.css'
import NavigationBar from "../../shared/Navbar/NavigationBar";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import PostsList from "../../components/PostsList/PostsList";
import Footer from "../../shared/footer/Footer";

const Homepage = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <CategoriesList></CategoriesList>
      <PostsList></PostsList>
      <Footer></Footer>
    </div>
  );
};
export default Homepage;