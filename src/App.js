import "./App.css";
import React from "react";
// Routing
import { Routes, Route } from "react-router-dom";
// // Pages
import Homepage from "./pages/homepage/Homepage";
import AddPostPage from "./pages/AddPostPage/AddPostPage";
import PostDetailsPage from "./pages/PostsDetailsPage/PostDetailsPage";
import Login from "./pages/LoginPage/Login";
import SignUp from "./pages/SignUpPage/SignUp";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboardPage.jsx";
import { AuthenticationGuard } from "./components/Auth0/AuthenticationGuard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="add-post" element={<AuthenticationGuard component={AddPostPage} />} />
      <Route path="post-details/:id" element={<AuthenticationGuard component={PostDetailsPage} />} />
      <Route path="my-account" element={<AuthenticationGuard component={UserDashboard} />} />
      <Route path="login" element={<Login />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="favorites" element={<FavoritesPage />} />
      <Route path="categories/:category" element={<Homepage />} />
      <Route path="admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
};

export default App;
