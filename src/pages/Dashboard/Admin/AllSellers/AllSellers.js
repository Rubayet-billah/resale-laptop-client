import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import { GoVerified } from 'react-icons/go'
import handleDelete from '../../../../Hooks/deleteUser/deleteUser';
import useVerify from '../../../../Hooks/useVerify/useVerify';

const AllSellers = () => {
    const [verified, verifiedLoader] = useVerify('nadir@gmail.com')
    console.log(verified)

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['/users'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-eta.vercel.app/users/?role=Seller`);
            const data = await res.json();
            return data;
        }
    })
    const handleDeleteEvent = (seller) => {
        handleDelete(seller, refetch);
    }
    const handleVerifyEvent = (seller) => {
        fetch(`https://assignment-12-server-eta.vercel.app/users/${seller._id}`, {
            method: 'PATCH',
        }).then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    toast.success(`${seller.name} Verified Successfully`);
                    refetch();
                }
            })
    }
    return (
        <div>
            <h3 className='text-3xl text-center mb-5'>All Sellers</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Verify</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers?.map((seller, idx) => <tr key={idx}>
                                <th><div className="avatar">
                                    <div className="w-12 rounded">
                                        <img src={seller.image} alt='N/A' />
                                    </div>
                                </div></th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.role}</td>
                                <td>
                                    {
                                        seller?.verified ? <span className='text-info flex items-center font-bold'><GoVerified className='mr-1' />Verified </span> : <button onClick={() => handleVerifyEvent(seller)} className='btn btn-sm btn-outline'>Verify</button>
                                    }
                                </td>
                                <td> <button onClick={() => handleDeleteEvent(seller)} className='btn btn-sm btn-outline btn-error'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;