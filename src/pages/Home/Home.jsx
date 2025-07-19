import React from 'react';
import Banner from './Banner';
import FreshProducts from './FreshProducts/FreshProducts';
import FreshHarvest from './FreshHarvests';
import SeasonalFruits from './SeasonalFruits';
import Testimonials from './Testimonials';
import Blogs from './Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FreshProducts></FreshProducts>
            <FreshHarvest></FreshHarvest>
            <SeasonalFruits></SeasonalFruits>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;