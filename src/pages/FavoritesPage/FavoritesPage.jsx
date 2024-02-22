import React from 'react'
import NavigationBar from '../../shared/Navbar/NavigationBar'
import FavoritesList from '../../components/FavoritesList/FavoritesList'
import Footer from "../../shared/footer/Footer";
import './favoritespage.css'

const FavoritesPage = () => {
    return (
        <div className='favoritespage-container'>
            <NavigationBar />
            <div className="favorites-title">
                <h2> My Favorites</h2>
            </div>
            <FavoritesList />
            <Footer />
        </div>
    )
}

export default FavoritesPage