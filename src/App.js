import "./App.css";
import React from "react";
// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Homepage from "./pages/homepage/Homepage";
import AddPost from "./pages/addpost/AddPost";
import PostDetail from "./pages/postdetail/PostDetail";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import UserDashboard from "./pages/user_dashboard/UserDashboard";
import Favorites from "./components/favorites/Favorites";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="add-post" element={<AddPost />} />
        <Route path="post-details/:id" element={<PostDetail />} />
        <Route path="my-account" element={<UserDashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
