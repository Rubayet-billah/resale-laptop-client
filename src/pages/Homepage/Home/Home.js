import React from 'react';
import Extra from '../../Shopping/Shop/extra';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Banner from '../Banner/Banner';
import ProductCategory from '../ProductCategory/ProductCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategory></ProductCategory>
            <AdvertisedProducts></AdvertisedProducts>
            {/* <Extra></Extra> */}
        </div>
    );
};

export default Home;