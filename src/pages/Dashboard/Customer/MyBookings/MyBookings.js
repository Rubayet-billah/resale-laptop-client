import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const MyBookings = () => {
    // const myBookings = useLoaderData();
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings/?email=${user?.email}`;

    const { data: myBookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    // authorization: `Bearer ${localStorage.getItem('doctorsToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    console.log(myBookings)

    return (
        <div>
            <h3 className='text-3xl mb-5'>My Appointments {myBookings.length}</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Laptop</th>
                            <th>Name</th>
                            <th>Booking Date</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBookings?.map((booking, idx) => <tr key={idx}>
                                <th><div className="avatar">
                                    <div className="w-12 rounded">
                                        <img src={booking.image} alt='' />
                                    </div>
                                </div></th>
                                <td>{booking.productName}</td>
                                <td>{booking.buyer}</td>
                                <td>{booking.bookingDate}</td>
                                <td>{booking.price}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-sm btn-primary text-white'>
                                            Pay
                                        </button></Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span className='text-success'>Paid</span>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;