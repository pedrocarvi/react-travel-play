import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './signupform.css'
import apiService from '../../services/apiservice'
import { ToastContainer, toast } from 'react-toastify'

const SignUpForm = () => {

    const navigate = useNavigate();

    const [signUpForm, setSignUpForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: ''
    })
    const [formValid, setFormValid] = useState(false);
    const [signUpClicked, setSignUpClicked] = useState(false);
    const [emailValid, setEmailValid] = useState(false)
    const [passwordValid, setPasswordValid] = useState(false)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSignUpForm({
            ...signUpForm,
            [name]: value
        });
    };

    const isSignUpClicked = () => {
        setSignUpClicked(true)
    }

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        return regex.test(password);
    };

    const checkFormValidity = () => {
        const { firstName, lastName, email, userName, password } = signUpForm;
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
        setFormValid(
            firstName.trim() !== '' &&
            lastName.trim() !== '' &&
            email.trim() !== '' &&
            userName.trim() !== '' &&
            isEmailValid &&
            isPasswordValid
        );
        setEmailValid(isEmailValid);
        setPasswordValid(isPasswordValid);
    };

    React.useEffect(() => {
        checkFormValidity();
    }, [signUpForm]);


    const submitForm = async (e) => {
        e.preventDefault()
        try {
            if (formValid) {
                const response = await apiService.postUser(signUpForm)
                localStorage.setItem('user_id', response.userId);
                toast.success('¡Datos ingresados correctamente!');
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }
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
                            name="firstName"
                            value={signUpForm.firstName}
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
                            name="lastName"
                            value={signUpForm.lastName}
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
                            name="userName"
                            value={signUpForm.userName}
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
                    {(signUpClicked && !emailValid) && <p style={{ color: 'red', textAlign: 'start' }}> Please enter a valid email </p>}
                </div>
                {/* Password */}
                <div className="input-cnt">
                    <div className="flex-column">
                        <label> Password </label>
                    </div>
                    <div className="inputForm">
                        <input
                            type="password"
                            autoComplete='off'
                            className="input-signup"
                            placeholder="Enter your password"
                            id="password"
                            name="password"
                            value={signUpForm.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    {(signUpClicked && !passwordValid) && <p style={{ color: 'red', textAlign: 'start' }}>Password must have at least 8 characters, one uppercase letter and one number</p>}
                </div>
                <button className="button-submit" onClick={isSignUpClicked} >
                    Sign Up
                </button>
                <p className="p">
                    Already have an account?{' '}
                    <Link to="/login" className="link-to-login">
                        <span className="span">Login</span>
                    </Link>
                </p>
            </form>
            <ToastContainer />
        </div>

    )
}

export default SignUpForm