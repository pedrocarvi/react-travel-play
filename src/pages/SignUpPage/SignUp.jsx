import React from "react";
import NavigationBar from "../../shared/Navbar/NavigationBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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

const SignUp = () => {
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
        <h1 style={{ fontSize: "2em", color: "#333" }}>SIGN UP</h1>
      </div>

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
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
