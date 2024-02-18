import React from 'react'
import "./categorieslist.css"
import { Link } from 'react-router-dom'

const CategoriesList = () => {

    const categories = [
        {
            titulo: "Home",
            imagen: "https://res.cloudinary.com/dek86juo8/image/upload/v1708208870/icons8-home-50_s0nru4.png",
            ruta: '/'
        },
        {
            titulo: "Food",
            imagen: "https://res.cloudinary.com/dek86juo8/image/upload/v1700348611/icons8-hamburger-50_osqcmr.png",
            ruta: `/categories/food`
        },
        {
            titulo: "Outdoors",
            imagen: "https://res.cloudinary.com/dek86juo8/image/upload/v1700348611/icons8-forest-50_royd3z.png",
            ruta: `/categories/outdoors`
        },
        {
            titulo: "Sports",
            imagen: "https://res.cloudinary.com/dek86juo8/image/upload/v1700348610/icons8-soccer-50_1_nkxcuu.png",
            ruta: `/categories/sports`
        },
        {
            titulo: "Party",
            imagen: "https://res.cloudinary.com/dek86juo8/image/upload/v1700350361/icons8-musical-notes-50_klrhhb.png",
            ruta: `/categories/music`
        },
        {
            titulo: "Music",
            imagen: "https://res.cloudinary.com/dek86juo8/image/upload/v1700350361/icons8-coconut-cocktail-50_y3omeg.png",
            ruta: `/categories/party`
        },
        {
            titulo: "Kids",
            imagen: "https://res.cloudinary.com/dek86juo8/image/upload/v1700349029/icons8-playground-50_suv2ld.png",
            ruta: `/categories/kids`
        },
        {
            titulo: "Public",
            imagen: "https://res.cloudinary.com/dek86juo8/image/upload/v1700349029/icons8-public-50_yvrz5f.png",
            ruta: `/categories/public`
        },
    ]

    return (
        <div className="categories-container d-flex justify-content-around align-items-center flex-wrap ">
            {
                categories.map((el, index) => (
                    <Link key={index} to={el.ruta} className="category-box d-flex flex-column justify-content-center align-items-center decoration-none">
                        <img src={el.imagen} alt={el.titulo} width="40px" />
                        <h6 className='category-title'> {el.titulo} </h6>
                    </Link>
                ))
            }
        </div>
    )
}

export default CategoriesList