// FreshProductsCards.jsx
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FreshProductsCards = ({ _id, item }) => {


  return (
    <div className="card lg:w-44 bg-base-100 shadow-md p-2 flex flex-col">
      <figure>
        <img src={item.image} alt={item.name} className="w-full h-36 object-cover rounded-t-md" />
      </figure>
      <div className="card-body p-3 flex flex-col flex-grow">
        <h2 className="card-title text-md font-semibold">{item.name}</h2>
        <p className="text-xs text-gray-600">
          {item.description ? item.description.slice(0, 60) + "..." : "No description"}
        </p>
        <div className="mt-1 mb-3">
          <p className="text-primary text-sm font-semibold">${item.price} / kg</p>
          <p className="text-xs text-gray-400">{item.reviews ?? 0} Reviews</p>
        </div>

        <Link to={`/categories/${item._id}`}>
          <button className="btn btn-sm bg-orange-600 text-white hover:bg-green-700 mt-auto">
            Add to Cart
          </button>
        </Link>

      </div>
    </div>
  );
};

export default FreshProductsCards;
