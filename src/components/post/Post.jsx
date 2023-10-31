import Card from "react-bootstrap/Card";
import PostFutbol from "../../assets/images/PostFutbol.avif";

const cardStyle = {
  width: "18rem",
  height: "14rem",
  backgroundImage: `url(${PostFutbol})`,
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end", // Mueve el contenido hacia la parte inferior
  alignItems: "center", // Centra horizontalmente
};

const cardBodyStyle = {
  color: "white", // Color de texto blanco
  fontWeight: "bold", // Texto en negrita
  textAlign: "center", // Alineación del texto en el centro
};

function Post() {
  return (
    <Card style={cardStyle}>
      <Card.Body style={cardBodyStyle}>
        <Card.Title>TORNEO F5</Card.Title>
        <Card.Subtitle className="mb-2 text-light">
          Tifosi Futbol Club
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default Post;
