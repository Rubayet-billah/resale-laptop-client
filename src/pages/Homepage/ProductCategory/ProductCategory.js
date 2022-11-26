import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';


const ProductCategory = () => {
    const { data: categories } = useQuery({
        queryKey: ['/categiries'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                categories?.map(category => <CategoryCard
                    key={category._id}
                    category={category}
                ></CategoryCard>)
            }
        </div>
    );
};

export default ProductCategory;