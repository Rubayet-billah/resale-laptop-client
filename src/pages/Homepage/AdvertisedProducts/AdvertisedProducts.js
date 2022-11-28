import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisedProduct from './AdvertisedProduct';

const AdvertisedProducts = () => {
    const { data: advertisedProducts = [] } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-rubayet-billah.vercel.app/advertisedproduct')
            const data = await res.json();
            return data
        }
    })

    return (
        <div className='my-5'>
            {advertisedProducts.length > 0 && <h2 className='text-4xl text-center my-6'>Special Offered Products</h2>}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    advertisedProducts?.map(product => <AdvertisedProduct
                        key={product._id}
                        product={product}
                    ></AdvertisedProduct>)
                }
            </div>
        </div>
    );
};

export default AdvertisedProducts;