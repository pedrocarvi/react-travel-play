import React from 'react'
import NavigationBar from '../../shared/navigationbar/NavigationBar'
import LoginForm from '../../components/login/LoginForm'

const Login = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <LoginForm />
        </div>
    )
}

export default Login;