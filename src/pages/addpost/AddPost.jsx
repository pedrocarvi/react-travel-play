import React from "react";
import NavigationBar from "../../shared/navigationbar/NavigationBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddPost = () => {
  return (
    <div>
      <NavigationBar />

      <div
        style={{
          textAlign: "center",
          maxWidth: "30%",
          margin: "0 auto",
          marginTop: "45px",
        }}
      >
        <h3 style={{ fontSize: "1.5em", color: "#555", marginBottom: "40px" }}>
          Crear un nuevo posteo
        </h3>
        <Form>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Control type="file" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Control type="text" placeholder="Enter title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSubtitle">
            <Form.Control type="text" placeholder="Enter subtitle" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Control as="textarea" placeholder="Enter description" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddPost;
