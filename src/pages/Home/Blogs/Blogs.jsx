import React, { useEffect, useState } from 'react';
import BlogsCard from './BlogsCard';

const Blogs = () => {
    const [blogs, setBlogs]=useState([]);

    useEffect(() => {
    fetch('http://localhost:5000/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data.data)); // ✅ extract data array
  }, []);
    return (
         <section className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-4 py-1 rounded-full mb-2">
          Our Blog
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          Fresh Harvest Blog
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <BlogsCard key={blog._id || index} blog={blog} />
        ))}
      </div>
    </section>
  );
};
    

export default Blogs;