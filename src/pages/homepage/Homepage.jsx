import React from "react";
import NavigationBar from "../../shared/navigationbar/NavigationBar";
import Post from "../../components/post/Post";
import ListComponent from "../../components/listComponent/ListComponent";
import Categories from "../../components/categories/Categories";

const Homepage = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Categories></Categories>
      <br></br>
      <br></br>
      <ListComponent></ListComponent>
    </div>
  );
};
export default Homepage;