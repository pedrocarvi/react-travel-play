import React from "react";
import NavigationBar from "../../shared/Navbar/NavigationBar";
import PostsList from "../../components/PostsList/PostsList";

const UserDashboard = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div
        style={{
          textAlign: "center",
          maxWidth: "30%",
          margin: "0 auto",
          marginTop: "50px",
        }}
      >
        <h1 style={{ fontSize: "2em", color: "#333" }}>Perfil Profesional</h1>
        <h3
          style={{
            fontSize: "1.5em",
            color: "#555",
            marginTop: "35px",
            marginBottom: "20px",
          }}
        >
          Posts publicados
        </h3>
      </div>
      <div style={{ textAlign: "center", maxWidth: "85%", margin: "0 auto" }}>
        <PostsList></PostsList>
      </div>
    </div>
  );
};

export default UserDashboard;
