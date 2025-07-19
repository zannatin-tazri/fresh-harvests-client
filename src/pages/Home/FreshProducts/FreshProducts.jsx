import React, { useEffect, useState } from 'react';
import FreshProductsCards from './FreshProductsCards';

const categories = ["All", "Fruits", "Vegetable", "Salad", "Drinks"];

const FreshProducts = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedTab, setSelectedTab] = useState("All");
  const [showAll, setShowAll] = useState(false); // For see all toggle

  useEffect(() => {
  fetch("http://localhost:5000/categories")
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        // Flatten to a single array of all items
        const allItems = Object.values(data.data).flat();
        setProducts(allItems);
        setFiltered(allItems);
      }
    })
    .catch(error => {
      console.error("Error fetching products:", error);
    });
}, []);


  useEffect(() => {
  setShowAll(false); // Reset see all when tab changes
  if (selectedTab === "All") {
    setFiltered(products);
  } else {
    setFiltered(
      products.filter(
        (p) =>
          p.category &&
          p.category.toLowerCase() === selectedTab.toLowerCase()
      )
    );
  }
}, [selectedTab, products]);


  // Decide how many items to show
  const productsToShow = showAll ? filtered : filtered.slice(0, 8);

  return (
    <div className="sm:w-3/4 w-full mx-auto">
      <div className="max-w-7xl px-6 pt-12">

        <div className="flex justify-center">
          <button className="my-3 bg-green-200 text-green-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-yellow-400 transition">
            Our Products
          </button>
        </div>

        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Fresh Products</h2>
          <p className="text-sm md:text-base text-gray-500 mt-2">Handpicked and delivered with care</p>
        </div>

        {/* Category Tabs */}
        <div
          role="tablist"
          className="tabs tabs-boxed justify-center mb-8 flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              onClick={() => setSelectedTab(cat)}
              className={`tab px-4 py-2 rounded-lg font-semibold focus:outline-none
                ${
                  selectedTab === cat
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-green-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {productsToShow.length === 0 ? (
            <div className="col-span-full text-center text-gray-400">
              No products found for "{selectedTab}"
            </div>
          ) : (
            productsToShow.map((item, idx, userEmail) => (
              <FreshProductsCards  key={idx} item={item} userEmail={userEmail}/>
            ))
          )}
        </div>

        {/* See All Button */}
        {filtered.length > 8 && (
          <div className="flex justify-center mt-8">
            <button
              className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "See All"}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default FreshProducts;
