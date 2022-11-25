import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import Product from '../Product/Product';

const Shop = () => {
    const products = useLoaderData();
    const [bookedProduct, setBookedProduct] = useState(null)

    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    products?.map(product => <Product
                        key={product._id}
                        product={product}
                        setBookedProduct={setBookedProduct}
                    ></Product>)
                }
            </div>
            {bookedProduct && <BookingModal
                bookedProduct={bookedProduct}
                setBookedProduct={setBookedProduct}
            ></BookingModal>}
        </div>
    );
};

export default Shop;