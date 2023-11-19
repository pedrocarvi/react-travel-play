import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";

const LoginForm = () => {
  return (
    <div style={styles.container}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit" style={styles.button}>
          Log in
        </Button>
      </Form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "400px",
    margin: "0 auto",
    background: "#f2f2f2", // Fondo gris
    padding: "30px",
    marginTop: "80px",
    border: "2px solid #0074d9", // Borde de color azul
    borderRadius: "10px", // Borde redondeado
  },
  button: {
    width: "100%", // Ancho del botón al 100%
  },
};

export default LoginForm;
