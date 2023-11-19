import React from 'react'
import NavigationBar from '../../shared/Navbar/NavigationBar'
import FavoritesList from '../../components/FavoritesList/FavoritesList'
import Footer from "../../shared/Footer/Footer";
import './favoritespage.css'

const FavoritesPage = () => {
    return (
        <div className='favoritespage-container'>
            <NavigationBar />
            <h2> My Favorites </h2>
            <FavoritesList />
            <Footer />
        </div>
    )
}

export default FavoritesPage