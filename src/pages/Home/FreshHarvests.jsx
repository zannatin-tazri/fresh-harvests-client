import React from 'react';
import man from '../../assets/man.avif';
import mash from '../../assets/mash.jpg';

const FreshHarvest = () => {
  return (
    <div id='aboutus' className="hero bg-base-100 w-11/12 lg:w-3/4 mx-auto min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-32 text-center lg:text-left">

        
        <div className="indicator">
          <div className="indicator-item indicator-bottom">
            <div className="card bg-base-100 w-48 shadow-xl">
              <figure className="w-full">
                <img
                  src={mash}
                  alt="Mushrooms"
                  className="w-full h-32 object-cover rounded-t-xl"
                />
              </figure>
              <div className="card-body items-center text-center p-2">
                <h2 className="card-title">Mushrooms</h2>
                <p>$5 / kg</p>
                <div className="card-actions">
                  <button className="btn border border-orange-500 text-orange-500 bg-white px-4 py-2 rounded hover:bg-orange-50">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <img
            src={man}
            className="w-80 h-80 object-cover rounded-full shadow-2xl"
            alt="Main"
          />
        </div>

        
        <div className="flex flex-col justify-center items-center lg:items-start">
          <div className="flex justify-center">
            <button className="my-3 bg-green-200 text-green-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-yellow-400 transition">
              About Us
            </button>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold">About Fresh Harvest</h1>

          <p className="py-2 px-2 max-w-md">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="mt-4 border border-orange-500 text-orange-500 bg-white px-6 py-2 rounded hover:bg-orange-50">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreshHarvest;
