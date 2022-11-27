import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ booking }) => {
    const { buyer, email, price, _id } = booking;
    const [cardError, setCardError] = useState('');
    const [cardSuccess, setCardSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        }).then(res => res.json())
            .then(data => {
                setClientSecret(data.clientSecret);
            })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true)
        if (!stripe || !elements) {
            return;
        }

        // get card information
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message);
            setProcessing(false)
        } else {
            setCardError('');
        }


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyer,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log('payment intend', paymentIntent)
            setCardSuccess('Congratulation! Your payment is successfully done.')
            const payment = {
                price,
                email,
                bookingId: _id,
                transectionId: paymentIntent.id
            }
            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                        navigate('/myorders')
                    }
                })
        } else {
            setCardSuccess('');
        }
        setProcessing(false)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <button type="submit" disabled={!stripe || !clientSecret || processing} className='btn btn-primary btn-sm mt-6'>
                    Pay
                </button>
            </form>
            <p className='text-red-500'>{cardError}</p>
            <p className='text-success'>{cardSuccess}</p>
        </div>
    );
};

export default CheckoutForm;