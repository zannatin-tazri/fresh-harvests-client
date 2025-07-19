// src/components/Banner.jsx
import React from "react";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import leftbg from "../../assets/banner.avif";
import rightimg from "../../assets/right.jpg";
import bannerImg from "../../assets/banner.png";
import salad from "../../assets/salad.jfif";

const Banner = () => {
    return (
        <section className="sm:px-6 relative w-full h-auto min-h-[90vh] overflow-hidden flex items-center bg-white">
            {/* Background Images */}
            <img
                src={leftbg}
                alt="leaf"
                className="absolute w-full sm:w-3/4 top-0 left-0 h-full object-cover z-0"
            />
            <img
                src={rightimg}
                alt="green bg"
                className="absolute w-1/4 top-0 right-0 h-full object-cover z-0"
            />

            
            <div className="relative z-10 flex flex-col-reverse lg:flex-row justify-between w-full px-4 sm:px-6 md:px-12 items-center gap-6 sm:gap-10 py-6 sm:py-8 max-w-screen-xl mx-auto">
                {/* Left Section (Text) */}
                <div className="w-full lg:max-w-xl space-y-5">
                    <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold">
                        Welcome to Fresh Harvest
                    </span>

                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                            Fresh Fruits <br /> and Vegetables
                        </h1>

                        <div className="p-2 sm:p-4 bg-white rounded-lg shadow-md flex items-center gap-2 sm:gap-4 w-sm sm:w-auto max-w-md">
                            <img
                                src={salad}
                                alt="salad"
                                className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full"
                            />
                            <div>
                                <p className="text-xs sm:text-sm text-gray-500">Special Offer</p>
                                <p className="font-semibold text-sm sm:text-md md:text-lg">
                                    Fresh Salad <span className="text-green-600">Up to 70% off</span>
                                </p>
                                <span className="text-[10px] sm:text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">
                                    CODE: FRESH25
                                </span>
                            </div>
                        </div>
                    </div>

                    <p className="text-gray-600 text-sm sm:text-base">
                        At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables.
                    </p>

                    
                    <button className="btn bg-orange-500 text-white px-4 sm:px-6 py-2 rounded hover:bg-orange-600 w-max text-sm sm:text-base">
                        Shop Now
                    </button>

                    
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4">
                        <div className="flex items-center gap-2 bg-green-700 px-4 py-2 rounded">
                            <FaAppStoreIos className="text-2xl text-white" />
                            <span className="text-sm font-semibold text-white">App Store</span>
                        </div>
                        <div className="flex items-center gap-2 bg-green-700 px-4 py-2 rounded">
                            <FaGooglePlay className="text-2xl text-white" />
                            <span className="text-sm font-semibold text-white">Google Play</span>
                        </div>
                    </div>
                </div>

                {/* Right Section (Image) */}
                <div className="relative z-50 flex-shrink-0 lg:ml-[-100px]">
                    <img
                        src={bannerImg}
                        alt="Girl"
                        className="h-[60vh] sm:h-[80vh] md:h-[80vh] object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
