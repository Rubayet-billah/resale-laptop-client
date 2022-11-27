import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const { productName, price, bookingDate, buyer, email, phone } = booking;
    return (
        <div className='text-center'>
            <h3 className="text-3xl">Payment for <span className='font-bold'>{productName}</span></h3>
            <p className='text-xl'>Please pay <span className='font-bold'>${price}</span> for purchase this product.</p>

            <div className='w-96 my-12 mx-auto px-5 pt-8 pb-4 rounded-lg'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;