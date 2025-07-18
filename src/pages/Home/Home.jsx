import React from 'react';
import Banner from './Banner';
import FreshProducts from './FreshProducts/FreshProducts';
import FreshHarvest from './FreshHarvests';
import SeasonalFruits from './SeasonalFruits';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FreshProducts></FreshProducts>
            <FreshHarvest></FreshHarvest>
            <SeasonalFruits></SeasonalFruits>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;