import { useQuery } from '@tanstack/react-query';
import React from 'react';
import handleDelete from '../../../../Hooks/deleteUser/deleteUser';

const AllCustomers = () => {
    const { data: customers = [], refetch } = useQuery({
        queryKey: ['/users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/?role=Customer`);
            const data = await res.json();
            return data;
        }
    })
    const handleDeleteEvent = (customer) => {
        handleDelete(customer, refetch);
    }
    return (
        <div>
            <h3 className='text-3xl mb-5'>My Bookings {customers.length}</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers?.map((customer, idx) => <tr key={idx}>
                                <th><div className="avatar">
                                    <div className="w-12 rounded">
                                        <img src={customer.image} alt='N/A' />
                                    </div>
                                </div></th>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.role}</td>
                                <td> <button onClick={() => handleDeleteEvent(customer)} className='btn btn-sm btn-outline btn-error'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCustomers;