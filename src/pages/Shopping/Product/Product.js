import React, { useState } from 'react';
import { GoVerified } from 'react-icons/go'
import { toast } from 'react-toastify';
import useVerify from '../../../Hooks/useVerify/useVerify';

const Product = ({ product, setBookedProduct }) => {
    const [toggle, setToggle] = useState(true)
    const { _id, image, name, resalePrice, originalPrice, usingTime, location, seller, email, description, condition } = product;

    const [verified, verifiedLoader] = useVerify(email);
    console.log(verified)
    if (verifiedLoader) {
        return
    }
    const handleReport = (id) => {
        const confirmation = window.confirm(`Are you sure to report ${name}`);
        if (confirmation) {
            fetch(`https://assignment-12-server-eta.vercel.app/reportedproducts/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ reported: true })
            }).then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        toast.success('Reported Successfully')
                    }
                })
        }
    }
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='grid grid-cols-2'>
                    <p className='text-xl'>Resale Price: <span className='text-primary font-bold'>${resalePrice}</span></p>
                    <p className='text-xl'>Original Price: <span className='text-primary font-bold'>${originalPrice}</span></p>
                    <p>Condition: {condition}</p>
                    <p>Used: {usingTime} year</p>
                    <p> <span className='flex items-center'>Seller: {seller} {verified && <GoVerified className='text-info ml-1' />}</span></p>
                    <p>Location: {location}</p>
                </div>
                <p>{description.length > 100 ? <>{
                    toggle ? <>{description.slice(0, 100)}... <span className='text-primary' onClick={() => setToggle(!toggle)}> see details
                    </span></> : <>{description}</>
                }</> : <>{description}</>}</p>





                <div className="card-actions justify-end">
                    <label htmlFor="booking-modal"
                        onClick={() => setBookedProduct(product)}
                        className='btn btn-sm btn-primary'>Book Now</label>
                    <button onClick={() => handleReport(_id)} className='btn btn-sm btn-primary btn-outline'>Report</button>
                </div>
            </div>
        </div>
    );
};

export default Product;