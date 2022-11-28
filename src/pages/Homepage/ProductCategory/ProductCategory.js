import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';


const ProductCategory = () => {
    const { data: categories } = useQuery({
        queryKey: ['/categiries'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-rubayet-billah.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-6'>Laptop Categories</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    categories?.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default ProductCategory;