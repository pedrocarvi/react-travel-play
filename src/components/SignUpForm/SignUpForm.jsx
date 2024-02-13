import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './signupform.css'
import apiService from '../../services/apiservice'
import { ToastContainer, toast } from 'react-toastify'

const SignUpForm = () => {

    const navigate = useNavigate();

    const [signUpForm, setSignUpForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: ''
    })

    const [formValid, setFormValid] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSignUpForm({
            ...signUpForm,
            [name]: value
        });
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const checkFormValidity = () => {
        const { firstname, lastname, email, username, password } = signUpForm;
        setFormValid(
            firstname.trim() !== '' &&
            lastname.trim() !== '' &&
            email.trim() !== '' &&
            username.trim() !== '' &&
            password.trim() !== '' &&
            validateEmail(email)
        );
    };

    React.useEffect(() => {
        checkFormValidity();
    }, [signUpForm]);


    const submitForm = (e) => {
        e.preventDefault()
        console.log("Sign Up Form Data: ", signUpForm)
        try {
            const response = apiService.postUser(signUpForm)
            console.log("Respuesta post user: ", response)
            toast.success('¡Datos ingresados correctamente!');
            navigate('/');
        } catch (error) {
            toast.error('Hubo problemas para crear la cuenta. Por favor, inténtelo nuevamente.');
            console.error('Error en la llamada de Post User:', error);
        }
    }

    return (
        <div className="signup-container">
            <div className="signup-message">
                <h2>Register</h2>
                <p>
                    Join our community where you can find hundreds of places and events!
                </p>
            </div>
            <form className="form" onSubmit={submitForm} >
                {/* First Name */}
                <div className="input-cnt">
                    <div className="flex-column">
                        <label> First Name </label>
                    </div>
                    <div className="inputForm">
                        <input
                            type="text"
                            className="input-signup"
                            placeholder="Ex. John"
                            autoComplete='off'
                            id="firstname"
                            name="firstname"
                            value={signUpForm.firstname}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                {/* Last Name */}
                <div className="input-cnt">
                    <div className="flex-column">
                        <label> Last Name </label>
                    </div>
                    <div className="inputForm">
                        <input
                            type="text"
                            className="input-signup"
                            placeholder="Ex. Doe"
                            autoComplete='off'
                            id="lastname"
                            name="lastname"
                            value={signUpForm.lastname}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                {/* Username */}
                <div className="input-cnt">
                    <div className="flex-column">
                        <label> Username </label>
                    </div>
                    <div className="inputForm">
                        <input
                            type="text"
                            className="input-signup"
                            placeholder="Enter your username"
                            autoComplete="off"
                            id="username"
                            name="username"
                            value={signUpForm.username}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                {/* Email */}
                <div className="input-cnt">
                    <div className="flex-column">
                        <label> Email </label>
                    </div>
                    <div className="inputForm">
                        <input
                            type="text"
                            className="input-signup"
                            placeholder="Enter your email"
                            autoComplete="off"
                            id="email"
                            name="email"
                            value={signUpForm.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                {/* Password */}
                <div className="input-cnt">
                    <div className="flex-column">
                        <label> Password </label>
                    </div>
                    <div className="inputForm">
                        <input
                            type="password"
                            className="input-signup"
                            placeholder="Enter your password"
                            id="password"
                            name="password"
                            value={signUpForm.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <button className="button-submit" disabled={!formValid} style={{ backgroundColor: !formValid ? '#CCCCCC' : '#9979f5', cursor: !formValid ? 'not-allowed' : 'pointer' }}>
                    Sign Up
                </button>
                <p className="p">
                    Already have an account?
                    <Link to="/login" className="link-to-login">
                        <span className="span"> Login </span>
                    </Link>
                </p>
            </form>
            <ToastContainer />
        </div>

    )
}

export default SignUpForm