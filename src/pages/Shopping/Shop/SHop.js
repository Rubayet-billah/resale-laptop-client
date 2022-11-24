import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Shop = () => {

    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: async ({ params }) => {
            const res = await fetch(`http://localhost:5000/products/${params.id}`);
            const data = await res.json();
            return data;
        }
    })

    console.log(data);
    return (
        <div>

        </div>
    );
};

export default Shop;