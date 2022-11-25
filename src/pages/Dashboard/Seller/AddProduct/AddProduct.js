import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm()


    const handleAddProduct = (data) => {
        // console.log(data)
        const { name, image, category, resalePrice, originalPrice, location, phone, purchaseYear, condition, description } = data;
        const date = format(new Date(), 'PP');
        const product = {
            name,
            image,
            categoryId: category,
            resalePrice,
            originalPrice,
            location,
            phone,
            usingTime: purchaseYear,
            condition,
            description,
            date,
            seller: user?.displayName
        }

        fetch('http://localhost:5000/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Product Added Successfully')
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
                            <option value='01'>Budget Laptop</option>
                            <option value='02'>Mid Range Laptop</option>
                            <option value='03'>High Specification</option>
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
                        <input className='input input-bordered w-full' type='text' placeholder='Image URL' {...register("image", { required: true })} />

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
                        <input className='input input-bordered w-full' type='text' placeholder='Year' {...register("purchaseYear", { required: true })} />

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