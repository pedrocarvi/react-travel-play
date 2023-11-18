import React from 'react'
import "./Categories.css"
import { Link } from 'react-router-dom'

const CategoriesList = () => {

    const categories = [
        {
            titulo: "Destacados",
            imagen: "https://res.cloudinary.com/dek86juo8/image/upload/v1699390045/icons8-star-50_oxqnbo.png",
            ruta: `/categories/destacados`
        },
        {
            titulo: "Gastronomia",
            imagen: "https://res.cloudinary.com/dek86juo8/image/upload/v1699390045/icons8-food-and-wine-50_bhrkcb.png",
            ruta: `/categories/gastronomia`
        },
        {
            titulo: "Aire libre",
            imagen: "https://res.cloudinary.com/dek86juo8/image/upload/v1699390045/icons8-park-50_asrauq.png",
            ruta: `/categories/aire-libre`
        },
        {
            titulo: "Deportes",
            imagen: "https://res.cloudinary.com/dek86juo8/image/upload/v1699390045/icons8-soccer-50_uaueub.png",
            ruta: `/categories/deportes`
        },

    ]

    return (
        <div className="categories-container d-flex justify-content-around align-items-center flex-wrap ">
            {
                categories.map((el) => (
                    <Link to={el.ruta} className="category-box d-flex flex-column justify-content-center align-items-center gap-2">
                        <img src={el.imagen} alt={el.titulo} width="40px" />
                        <h6> {el.titulo} </h6>
                    </Link>
                ))
            }
        </div>
    )
}

export default CategoriesList