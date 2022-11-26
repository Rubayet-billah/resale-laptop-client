import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    // console.log(errors)

    const handleRegister = (data) => {
        const { name, email, password, category } = data;
        // creating user
        createUser(email, password)
            .then(result => {
                // update user
                updateUser(name)
                    .then(() => {
                        const { displayName, email, uid } = result.user;
                        const user = {
                            name: displayName,
                            email,
                            role: category,
                            userId: uid
                        }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(user)
                        })
                            .then(res => res.json())
                            .then(data => {
                                reset();
                                navigate('/')
                            })

                    }).catch(err => console.error(err))
            }).catch(err => console.error(err))

    }
    return (
        <div>
            <div>
                <div className="mt-5 md:mt-12">
                    <div className="text-center my-6">
                        <h1 className="text-5xl font-bold">Register Now</h1>
                    </div>
                    <div className="card w-full md:w-1/2 shadow-2xl bg-base-100 mx-auto">
                        <form className='card-body' onSubmit={handleSubmit(handleRegister)}>

                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input className='input input-bordered w-full' type='text' placeholder='Name' {...register("name", { required: true })} />
                            {errors.name && <span className='text-red-500 text-sm italic'>Name is required</span>}

                            <label className="label">
                                <span className="label-text">Account as</span>
                            </label>
                            <select className="select select-bordered w-full" {...register("category", { required: true })} >
                                <option>Customer</option>
                                <option>Seller</option>
                            </select>
                            {/* <label className="label">
                                <span className="label-text">Account Category</span>
                            </label>
                            <input className='input input-bordered w-full' type="file" name="" id="" /> */}
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input className='input input-bordered w-full' type='email' placeholder='Email' {...register("email", { required: true })} />
                            {errors.email && <span className='text-red-500 text-sm italic'>Email is required</span>}
                            {/* register your input into the hook by invoking the "register" function */}

                            {/* include validation with required or other standard HTML validation rules */}

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input className='input input-bordered w-full' type='password' placeholder='Password' {...register("password", { required: true })} />
                            {errors.password && <span className='text-red-500 text-sm italic'>Password is required</span>}
                            {/* errors will return when field validation fails  */}

                            <input className='btn btn-primary my-3' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;