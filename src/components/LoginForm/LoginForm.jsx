import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './loginform.css'
import apiService from "../../services/apiservice";
import { ToastContainer, toast } from 'react-toastify';

const LoginForm = () => {

  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })
  const [formValid, setFormValid] = useState(false);
  const [loginClicked, setLoginClicked] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginForm({
      ...loginForm,
      [name]: value
    });
  };

  const isLoginClicked = () => {
    setLoginClicked(true)
  }

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const checkFormValidity = () => {
    const { email, password } = loginForm;
    setFormValid(
      email.trim() !== '' &&
      password.trim() !== '' &&
      validateEmail(email));
  };

  React.useEffect(() => {
    checkFormValidity();
  }, [loginForm]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (formValid) {
        const response = await apiService.postUser(loginForm)
        localStorage.setItem('user_id', response.userId);
        toast.success('¡Datos ingresados correctamente!');
        navigate('/');
      }
    } catch (error) {
      toast.error('Hubo problemas para ingresar a la cuenta. Por favor, inténtelo nuevamente.');
      console.error('Error en la llamada de Post User:', error);
    }
  }

  return (
    <div className="login-container">
      <div className="login-message">
        <h2>Travel and Play</h2>
        <p>
          Discover the ultimate event experience with our app! Seamlessly create and join events, bringing together family, friends, and fellow enthusiasts.
        </p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        {/* Email */}
        <div className="flex-column">
          <label>Email </label>
        </div>
        <div className="inputForm">
          <svg
            height="20"
            viewBox="0 0 32 32"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Layer_3" data-name="Layer 3">
              <path
                d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"
                fill="rgba(0,0,0,0.5)"
              ></path>
            </g>
          </svg>

          <input
            type="text"
            className="input"
            placeholder="Enter your email"
            autoComplete="off"
            id="email"
            name="email"
            value={loginForm.email}
            onChange={handleInputChange}
            required
          />
        </div>
        {(loginClicked && !formValid) && <p style={{ color: 'red', textAlign: 'start' }}> Please enter a valid email </p>}
        {/* Password */}
        <div className="flex-column">
          <label>Password </label>
        </div>
        <div className="inputForm">
          <svg
            height="20"
            viewBox="-64 0 512 512"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"
              fill="rgba(0,0,0,0.5)"
            ></path>
            <path
              d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"
              fill="rgba(0,0,0,0.5)"
            ></path>
          </svg>
          <input
            type="password"
            autoComplete="off"
            className="input"
            placeholder="Enter your password"
            id="password"
            name="password"
            value={loginForm.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className="button-submit" onClick={isLoginClicked} >
          Login
        </button>
        <p>
          Still don't have an account?
          <Link to="/sign-up" className="link-to-signup">
            <span className="span"> Sign Up </span>
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
