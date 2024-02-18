import React, { useState, useEffect } from 'react'
import './userdatacomponent.css'
import apiService from '../../services/apiservice'
import { useLocation } from 'react-router-dom'

const UserDataComponent = () => {
    const [userData, setUserData] = useState({})
    const location = useLocation();
    const userId = location.pathname.split("/profile/")[1];

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await apiService.getUserById(userId)
                setUserData(userData)
            } catch (error) {
                console.log("Error al obtener el perfil: ", error)
            }
        }
        const fetchPostByUser = async () => {
            try {
                const postsByUser = await apiService.pos
            } catch (error) {
                console.log("Error al obtener posteos del usuario: ", error)
            }
        }
        fetchUser()
    }, [userId])

    return (
        <div className="userdata-container">
            <h4> {userData.firstName} {userData.lastName} </h4>
        </div>
    )
}

export default UserDataComponent