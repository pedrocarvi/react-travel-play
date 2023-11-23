import React from 'react'
import { Link } from 'react-router-dom'
import './signupform.css'

const SignUpForm = () => {
    return (
        <div class="signup-container">
            <div class="signup-message">
                <h2>Register</h2>
                <p>
                    Our app is simple. You register, upload the information you want and thats
                    it.
                </p>
            </div>
            <form class="form">
                <div class="input-cnt">
                    <div class="flex-column">
                        <label>Username </label>
                    </div>
                    <div class="inputForm">
                        <input
                            type="text"
                            className="input-signup"
                            placeholder="Enter your username"
                            autocomplete="off"
                        />
                    </div>
                </div>
                <div class="input-cnt">
                    <div class="flex-column">
                        <label>Email </label>
                    </div>
                    <div class="inputForm">
                        <input
                            type="text"
                            className="input-signup"
                            placeholder="Enter your email"
                            autocomplete="off"
                        />
                    </div>
                </div>
                <div class="input-cnt">
                    <div class="flex-column">
                        <label>Password </label>
                    </div>
                    <div class="inputForm">
                        <input
                            type="password"
                            className="input-signup"
                            placeholder="Enter your password"
                        />
                    </div>
                </div>
                <Link to="/">
                    <button class="button-submit">
                        Sign Up
                    </button>
                </Link>
                <p class="p">
                    Already have an account?
                    <Link to="/login">
                        <span class="span"> Login </span>
                    </Link>
                </p>
            </form>
        </div>

    )
}

export default SignUpForm