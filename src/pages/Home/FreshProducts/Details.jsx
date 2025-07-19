import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import axios from "axios";

const Details = () => {

    const [relatedItems, setRelatedItems] = useState([]);


  const data = useLoaderData();
  const [quantity, setQuantity] = useState(1);

  if (!data) {
    return <div className="text-center text-red-500">No product found.</div>;
  }

  const { title, image, price, description, category, reviews = 1 } = data;

  const handleAdd = () => setQuantity(prev => Math.min(prev + 1, 99));
  const handleRemove = () => setQuantity(prev => Math.max(prev - 1, 1));




  useEffect(() => {
  const fetchRelated = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/related-products?category=${category}`);
      if (res.data.success) {
        const filtered = res.data.data.filter(item => item.title !== title); // avoid showing the same item
        setRelatedItems(filtered);
      }
    } catch (err) {
      console.error("Failed to fetch related items:", err);
    }
  };
  if (category) {
    fetchRelated();
  }
}, [category, title]);

  return (
    <div className="bg-base-100 w-full min-h-screen flex flex-col justify-center items-center p-6">
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row gap-10">
        {/* Image */}
        <div className="bg-white p-4 rounded-lg shadow w-full lg:w-1/4 flex justify-center items-center">
          <img src={image} alt={title} className="w-full rounded-md" />
        </div>

        {/* Details */}
        <div className="w-full lg:w-1/2 space-y-4">
          <span className="inline-block bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full uppercase">
            {category}
          </span>

          <h1 className="text-4xl font-bold text-gray-800">{title}</h1>

          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-xl">★</span>
            <span className="font-semibold text-gray-700">5.0</span>
            <span className="text-sm text-gray-500">({reviews} review{reviews > 1 ? 's' : ''})</span>
          </div>

          <p className="text-2xl font-semibold text-orange-600">${price}/kg</p>

          <p className="text-gray-600">
            From our farm directly to your door, our fresh {title.toLowerCase()}s are harvested at the peak of ripeness...
          </p>

          {/* Quantity & Actions */}
          <div className="flex items-center gap-4 mt-4 flex-wrap">
            <div className="flex items-center border rounded-md overflow-hidden">
              <button onClick={handleRemove} className="px-3 py-1 text-xl">−</button>
              <span className="px-4">{quantity}</span>
              <button onClick={handleAdd} className="px-3 py-1 text-xl">+</button>
            </div>
            
            <button className="btn bg-orange-500 text-white flex items-center gap-2">
              <FaShoppingCart /> Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-10 w-full max-w-4xl border-t pt-6">
        <div className="tabs mb-4">
          <a className="tab tab-bordered tab-active text-green-700">Description</a>
          <a className="tab tab-bordered">Reviews ({reviews})</a>
        </div>
        <div className="bg-white p-6 rounded shadow text-gray-700 leading-relaxed border">
          <p>
            Our {title.toLowerCase()}s are sustainably grown, ensuring the best quality and taste. Each is handpicked and carefully prepared...
          </p>
          <p className="mt-4">
            Perfect for smoothies, desserts, curries, and more — let the natural sweetness of the {title.toLowerCase()} elevate your recipes.
          </p>
        </div>
      </div>

      {/* Related Product */}

      {/* Related Products Section */}
<div className="mt-16 max-w-6xl mx-auto text-center">
  <span className="text-sm text-green-600 font-semibold uppercase">Our Products</span>
  <h2 className="text-3xl font-bold mt-2 mb-6">Related products</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
    {relatedItems.map((item) => (
      <div
        key={item._id}
        className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-all flex flex-col items-center"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-36 object-cover rounded-md mb-3"
        />
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-600">${item.price}/kg</p>
        <Link to={`/categories/${item._id}`} className="w-full">
          <button className="mt-3 w-full btn btn-outline flex items-center justify-center gap-2">
            <FaShoppingCart /> Add to cart
          </button>
        </Link>
      </div>
    ))}
  </div>
</div>




    </div>
  );
};

export default Details;
