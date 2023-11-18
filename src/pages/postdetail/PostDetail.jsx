import React from "react";
import NavigationBar from "../../shared/navigationbar/NavigationBar";
import Image from "react-bootstrap/Image";
import PostFutbol from "../../assets/images/PostFutbol.avif";
import Button from "react-bootstrap/Button";

const PostDetail = () => {
  return (
    <div>
      <NavigationBar />
      <div style={{ textAlign: "center", maxWidth: "30%", margin: "0 auto" }}>
        <Image
          src={PostFutbol}
          fluid
          style={{ marginBottom: "20px", marginTop: "45px" }}
        />
        <h1 style={{ fontSize: "2em", color: "#333" }}>TORNEO F5</h1>
        <h3 style={{ fontSize: "1.5em", color: "#555" }}>Tifosi Futbol Club</h3>
        <hr></hr>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div style={{ marginBottom: "80px", marginTop: "45px" }}>
          <Button variant="primary">Ver Perfil</Button>{" "}
          <Button variant="primary">Guardar</Button>{" "}
          <Button variant="success">Compartir</Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
