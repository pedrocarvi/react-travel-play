import { Button, Card } from "react-bootstrap";
import "./Posts.css"

function Post() {
  return (
    <div className="posts-container d-flex justify-content-center">
      <Card style={{ width: '300px' }}>
        <Card.Img variant="top" src="https://res.cloudinary.com/dek86juo8/image/upload/v1699392441/1613002271_264040_1613002427_noticiareportajes_grande_nl4nvk.jpg" />
        <Card.Body>
          <Card.Title> </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Post;
