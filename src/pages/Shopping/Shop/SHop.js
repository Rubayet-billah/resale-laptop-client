import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Shop = () => {
    const products = useLoaderData();

    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    products?.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Shop;