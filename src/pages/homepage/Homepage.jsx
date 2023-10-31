import React from 'react'
import NavigationBar from '../../shared/navigationbar/NavigationBar'
import Post from '../../components/post/Post'

const Homepage = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h1>Homepage</h1>
            <Post></Post>
        </div>
    )
}

export default Homepage