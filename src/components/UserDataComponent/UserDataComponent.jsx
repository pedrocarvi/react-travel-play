import React from 'react'
import './userdatacomponent.css'
import PostsList from '../PostsList/PostsList'

const UserDataComponent = () => {
    return (
        <div className="userdata-container">
            <div className='userdata-image'></div>
            <h4> Juan </h4>
            <p> 3 eventos creados - Biografia </p>
            <PostsList />
        </div>
    )
}

export default UserDataComponent