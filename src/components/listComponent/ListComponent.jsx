import ListGroup from "react-bootstrap/ListGroup";
import Post from "../../components/post/Post";

function ListComponent() {
  return (
    <ListGroup horizontal>
      <ListGroup.Item>
        <Post></Post>
      </ListGroup.Item>

      <ListGroup.Item>
        <Post></Post>
      </ListGroup.Item>

      <ListGroup.Item>
        <Post></Post>
      </ListGroup.Item>

      <ListGroup.Item>
        <Post></Post>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ListComponent;
