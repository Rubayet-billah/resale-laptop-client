import React, { useState } from 'react';

const Product = ({ product, setBookedProduct }) => {
    const [toggle, setToggle] = useState(true)
    const { image, name, resalePrice, originalPrice, usingTime, location, seller, description, condition } = product;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='grid grid-cols-2'>
                    <p className='text-xl'>Resale Price: <span className='text-primary font-bold'>${resalePrice}</span></p>
                    <p className='text-xl'>Original Price: <span className='text-primary font-bold'>${originalPrice}</span></p>
                    <p>Condition: {condition}</p>
                    <p>Used: {usingTime}</p>
                    <p>Seller: {seller}</p>
                    <p>Location: {location}</p>
                </div>
                <p>{description.length > 100 ? <>{
                    toggle ? <>{description.slice(0, 100)}... <span className='text-primary' onClick={() => setToggle(!toggle)}> see details
                    </span></> : <>{description}</>
                }</> : <>{description}</>}</p>





                <div className="card-actions justify-end">
                    {/* <button className='btn w-full btn-primary'>Book Now</button> */}
                    <label htmlFor="booking-modal"
                        onClick={() => setBookedProduct(product)}
                        className='btn w-full btn-primary'>Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default Product;