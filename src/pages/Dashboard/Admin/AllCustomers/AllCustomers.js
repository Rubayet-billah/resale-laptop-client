import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllCustomers = () => {
    const { data: customers = [] } = useQuery({
        queryKey: ['/users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/?role=Customer`);
            const data = await res.json();
            return data;
        }
    })
    console.log(customers)
    return (
        <div>
            <div className="text-8xl">Customers {customers?.length}</div>
        </div>
    );
};

export default AllCustomers;