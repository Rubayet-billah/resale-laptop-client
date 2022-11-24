import React from 'react';

const Product = ({ product }) => {
    const { image, name, } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Laptop between 10000 to 200000</p>
                <div className="card-actions justify-end">
                    <button className='btn btn-sm btn-primary'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;