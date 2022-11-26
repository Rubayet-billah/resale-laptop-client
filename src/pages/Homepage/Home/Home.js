import React from 'react';
import AllCustomers from '../../Dashboard/Admin/AllCustomers/AllCustomers';
import AllSellers from '../../Dashboard/Admin/AllSellers/AllSellers';
import Extra from '../../Shopping/Shop/extra';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import ProductCategory from '../ProductCategory/ProductCategory';

const Home = () => {
    return (
        <div>
            <ProductCategory></ProductCategory>
            <AdvertisedProducts></AdvertisedProducts>
            {/* <Extra></Extra> */}
            <AllCustomers></AllCustomers>
            <AllSellers></AllSellers>
        </div>
    );
};

export default Home;