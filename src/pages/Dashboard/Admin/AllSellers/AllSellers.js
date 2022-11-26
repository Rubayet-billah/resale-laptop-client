import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const { data: sellers = [] } = useQuery({
        queryKey: ['/users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/?role=Seller`);
            const data = await res.json();
            return data;
        }
    })
    console.log(sellers)
    return (
        <div>
            <div className="text-8xl">sellers {sellers?.length}</div>
        </div>
    );
};

export default AllSellers;