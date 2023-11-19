import "./App.css";
import React from "react";
// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Homepage from "./pages/HomePage/Homepage";
import AddPostPage from "./pages/AddPostPage/AddPostPage";
import PostDetailsPage from "./pages/PostsDetailsPage/PostDetailsPage";
import Login from "./pages/LoginPage/Login";
import SignUp from "./pages/SignUpPage/SignUp";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="add-post" element={<AddPostPage />} />
        <Route path="post-details/:id" element={<PostDetailsPage />} />
        <Route path="my-account" element={<UserDashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="categories/:category" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
