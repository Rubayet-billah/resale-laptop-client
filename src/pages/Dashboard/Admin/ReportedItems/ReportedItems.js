import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const ReportedItems = () => {
    const { data: reportedProducts = [], refetch } = useQuery({
        queryKey: ['reportedproducts'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-rubayet-billah.vercel.app/reportedproducts`)
            const data = await res.json();
            return data
        }
    })

    const handleDeleteEvent = (product) => {
        fetch(`https://assignment-12-server-rubayet-billah.vercel.app/reportedproducts/${product._id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${product.name} Deleted Successfully`)
                    refetch()
                }
            })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Seller</th>
                            <th>Seller Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reportedProducts?.map((product, idx) => <tr key={idx}>
                                <th><div className="avatar">
                                    <div className="w-12 rounded">
                                        <img src={product.image} alt='N/A' />
                                    </div>
                                </div></th>
                                <td>{product.name}</td>
                                <td>{product.seller}</td>
                                <td>{product.email}</td>
                                <td> <button onClick={() => handleDeleteEvent(product)} className='btn btn-sm btn-outline btn-error'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItems;