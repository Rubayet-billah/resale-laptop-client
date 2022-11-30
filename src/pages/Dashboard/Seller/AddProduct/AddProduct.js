import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm()
    const imgHostKey = process.env.REACT_APP_imgbb_apikey;
    const navigate = useNavigate()

    const handleAddProduct = (data) => {
        // console.log(data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)

        const { name, category, resalePrice, originalPrice, location, phone, purchaseYear, usingTime, condition, description } = data;
        const date = format(new Date(), 'PP');

        fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const product = {
                        name,
                        image: imgData.data.url,
                        categoryId: category,
                        resalePrice,
                        originalPrice,
                        location,
                        phone,
                        usingTime,
                        purchaseYear,
                        condition,
                        description,
                        date,
                        status: 'Available',
                        seller: user?.displayName,
                        email: user?.email
                    }

                    fetch('https://assignment-12-server-eta.vercel.app/products', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    }).then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Product Added Successfully');
                                navigate('/myproducts')
                            }
                        })
                }
            })


    }
    return (
        <div>
            <div className="mt-5 md:mt-12">
                <div className="text-center my-6">
                    <h1 className="text-5xl font-bold">Add Product Here</h1>
                </div>
                <div className="card w-full md:w-1/2 shadow-2xl bg-base-100 mx-auto">
                    <form className='card-body' onSubmit={handleSubmit(handleAddProduct)}>

                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input className='input input-bordered w-full' type='text' placeholder='Product Name' {...register("name", { required: true })} />

                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select className="select select-bordered w-full" {...register("category", { required: true })} >
                            <option value='01'>Basic Laptop</option>
                            <option value='02'>Budget Laptop</option>
                            <option value='03'>Gaming Laptop</option>
                        </select>

                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <select className="select select-bordered w-full" {...register("condition", { required: true })} >
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>

                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input className="file-input file-input-bordered w-full" type="file" placeholder="Image URL" {...register("image", { required: true })} />

                        <label className="label">
                            <span className="label-text">Resale Price</span>
                        </label>
                        <input className='input input-bordered w-full' type='text' placeholder='Resale Price' {...register("resalePrice", { required: true })} />

                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input className='input input-bordered w-full' type='text' placeholder='Original Price' {...register("originalPrice", { required: true })} />

                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input className='input input-bordered w-full' type='text' placeholder='Phone' {...register("phone", { required: true })} />

                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input className='input input-bordered w-full' type='text' placeholder='Product Location' {...register("location", { required: true })} />

                        <label className="label">
                            <span className="label-text">Year of Purchase</span>
                        </label>
                        <input className='input input-bordered w-full' type='text' placeholder='Purchase Year' {...register("purchaseYear", { required: true })} />
                        <label className="label">
                            <span className="label-text">Year Used</span>
                        </label>
                        <input className='input input-bordered w-full' type='text' placeholder='Year Used' {...register("usingTime", { required: true })} />

                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered w-full" placeholder="Description"  {...register("description", { required: true })}></textarea>

                        <input className='btn btn-primary my-3' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;