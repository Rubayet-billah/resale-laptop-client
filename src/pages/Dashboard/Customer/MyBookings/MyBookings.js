import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyBookings = () => {
    const myBookings = useLoaderData();
    console.log(myBookings)
    return (
        <div>
            <div className="text-8xl">{myBookings.length}</div>
        </div>
    );
};

export default MyBookings;