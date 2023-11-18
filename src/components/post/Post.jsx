import Card from "react-bootstrap/Card";
import PostFutbol from "../../assets/images/PostFutbol.avif";
import { Link } from "react-router-dom";

const cardStyle = {
  width: "18rem",
  height: "14rem",
  backgroundImage: `url(${PostFutbol})`,
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end", // Mueve el contenido hacia la parte inferior
};

const cardBodyStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end", // Mueve el contenido hacia la parte inferior
  alignItems: "flex-start",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semi-transparente
  width: "100%", // Ancho completo del Card.Body
  boxSizing: "border-box",
  color: "white",
  fontWeight: "bold",
  padding: "20px", // Añade un relleno para separar del borde
};

function Post() {
  return (
    <Link to="/post-details/1" style={{ textDecoration: "none" }}>
      <Card style={cardStyle}>
        <Card.Body style={cardBodyStyle}>
          <div>
            <Card.Title style={{ alignSelf: "flex-start" }}>
              TORNEO F5
            </Card.Title>
            <Card.Subtitle
              className="mb-2 text-light"
              style={{ alignSelf: "flex-start" }}
            >
              Tifosi Futbol Club
            </Card.Subtitle>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Post;
