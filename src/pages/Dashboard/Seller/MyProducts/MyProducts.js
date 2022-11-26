import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [myProducts, setMyproducts] = useState([]);
    const [call, setCall] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:5000/products/?email=${user?.email}`)
            .then(data => {
                console.log(data.data)
                setMyproducts(data.data)
            })
    }, [user?.email, call])

    // handle advertise product
    const handleAdvertise = (product) => {
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ advertised: true })
        }).then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    toast.success(`${product.name} Advertised Successfully`);
                    setCall(!call)
                }
            })
    }

    // handle delete product
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(result => {
                if (result.deletedCount > 0) {
                    toast.success('Product Deleted Successfully');
                    setCall(!call)
                }
            })
    }

    return (
        <div>
            <h3 className='text-3xl mb-5'>My Products {myProducts?.length}</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Laptop</th>
                            <th>Status</th>
                            <th>Advertise</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts?.map((product, idx) => <tr key={idx}>
                                <th><div className="avatar">
                                    <div className="w-12 rounded">
                                        <img src={product.image} alt='' />
                                    </div>
                                </div></th>
                                <td>{product.name}</td>
                                <td>{!product.status ? <span className='text-success'>Available</span> : <span className='text-warning'>Sold</span>}</td>
                                <td>
                                    {
                                        !product.advertised ?
                                            <button onClick={() => handleAdvertise(product)} className='btn btn-sm btn-outline'>
                                                Avdvertise
                                            </button> : <span className='font-bold text-success'>Advertised</span>
                                    }
                                    {
                                        // booking.price && booking.paid && <span className='text-success'>Paid</span>
                                    }
                                </td>
                                <td className='font-bold text-primary'>${product.resalePrice}</td>
                                <td><button onClick={() => handleDelete(product._id)} className='btn btn-sm btn-outline btn-error'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;