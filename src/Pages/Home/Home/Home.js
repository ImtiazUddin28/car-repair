import React from 'react';
import Choose from '../Choose/Choose';
import About from '../About/About';
import Banner from '../Banner/Banner';

import Services from '../Services/Services';
import Team from '../Team/Team';
import ContactBanner from '../ContactBanner/ContactBanner';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ContactBanner/>
            <Products></Products>
            <Team></Team>
            <Choose></Choose>
        </div>
    );
};

export default Home;