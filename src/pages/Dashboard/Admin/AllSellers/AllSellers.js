import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const { data: customers = [] } = useQuery({
        queryKey: ['/users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/?role=Seller`);
            const data = await res.json();
            return data;
        }
    })
    console.log(customers)
    return (
        <div>

        </div>
    );
};

export default AllSellers;