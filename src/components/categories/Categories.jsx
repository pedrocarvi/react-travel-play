import React from "react";
import Deportes from "../../assets/images/Deportes.png";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Deportes",
      image: Deportes,
    },
    {
      id: 2,
      name: "Fiestas",
      image: Deportes,
    },
    {
      id: 3,
      name: "Gastronomía",
      image: Deportes,
    },
    {
      id: 4,
      name: "Niños",
      image: Deportes,
    },
    {
      id: 5,
      name: "Adultos mayores",
      image: Deportes,
    },
    {
      id: 6,
      name: "Categoría 6",
      image: Deportes,
    },
  ];

  return (
    <div className="navbar">
      <ul className="nav-list">
        {categories.map((category) => (
          <li key={category.id} className="nav-item">
            <a href="#" className="nav-link">
              <img
                src={category.image}
                alt={category.name}
                className="nav-image"
              />
              <p className="nav-text">{category.name}</p>
            </a>
          </li>
        ))}
      </ul>
      <style>
        {`
          .navbar {
            background-color: #666;
            color: #fff;
            padding: 10px;
          }

          .nav-list {
            list-style: none;
            display: flex;
            justify-content: space-between;
            padding: 0;
          }

          .nav-item {
            text-align: center;
            margin-left: 40px;
          }

          .nav-link {
            text-decoration: none;
            color: #fff;
            display: block;
            text-align: center;
          }

          .nav-image {
            width: 50px; /* Ajusta el tamaño de la imagen según tus preferencias */
            height: 50px;
          }

          .nav-text {
            margin: 5px 0;
          }
        `}
      </style>
    </div>
  );
};

export default Categories;
