import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReadMore = () => {
      
      const data=useLoaderData();
      const { title, image,  description} = data;

    return (
        <div className='bg-base-100 w-full min-h-screen flex flex-col justify-center items-center p-6'>
           <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row gap-10">
                   {/* Image */}
                   <div className="bg-white p-4 rounded-lg shadow w-full lg:w-1/4 flex justify-center items-center">
                     <img src={image} alt={title} className="w-full rounded-md" />
                   </div>
           
                   {/* Details */}
                   <div className="w-full lg:w-1/2 space-y-4">
                     
           
                     <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
                     <p>
                        {description}
                     </p>

          
                     </div>
                   </div>
                 </div>
       
    );
};

export default ReadMore;