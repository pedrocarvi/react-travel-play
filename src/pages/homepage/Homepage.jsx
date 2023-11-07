import React from 'react'
import NavigationBar from '../../shared/navigationbar/NavigationBar'
import Post from '../../components/post/Post'

const Homepage = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            {/* Crear componente de categorias */}
            {/* El componente post debe consumir getAllPost o los Post que son destacados */}
            <Post></Post>
        </div>
    )
}

export default Homepage;
