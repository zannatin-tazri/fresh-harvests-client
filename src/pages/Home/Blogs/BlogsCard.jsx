import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogsCard = ({ blog }) => {
  const { _id, title, description, image, date } = blog;

  return (
    <div className="rounded-xl  bg-white shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <p className="text-sm text-gray-400 mb-2">{date}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">
          {description?.slice(0, 100)}...
        </p>
        <Link
          to={`/blogs/${_id}`}
          className="text-orange-600 hover:text-green-700 text-sm font-medium flex items-center gap-1"
        >
          Read More <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default BlogsCard;
