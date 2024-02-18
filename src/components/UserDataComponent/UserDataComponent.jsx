import React, { useState, useEffect } from 'react'
import './userdatacomponent.css'
import apiService from '../../services/apiservice'
import { useLocation } from 'react-router-dom'
import PostCard from '../PostCard/PostCard'

const UserDataComponent = () => {
    const [userData, setUserData] = useState({})
    const [userPosts, setUserPosts] = useState([])
    const location = useLocation();
    const userId = location.pathname.split("/profile/")[1];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userDataResponse = await apiService.getUserById(userId);
                setUserData(userDataResponse);
                const postsByUser = await apiService.getPostsByUserId(userId);
                setUserPosts(postsByUser);
            } catch (error) {
                console.log("Error al obtener datos del usuario: ", error);
            }
        };

        fetchData();
    }, [userId]);

    return (
        <div>
            <div className="userdata-container">
                <h4> {userData.firstName} {userData.lastName} </h4>
            </div>
            <div className="posts-container">
                {userPosts.map((post) => (
                    <PostCard key={post.postedId} postdata={post}></PostCard>
                ))}
            </div>
        </div>
    )
}

export default UserDataComponent