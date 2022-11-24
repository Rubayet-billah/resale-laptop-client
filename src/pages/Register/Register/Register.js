import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { user, createUser } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    // console.log(errors)

    const handleRegister = (data) => {
        const { name, email, password, category } = data;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            }).catch(err => console.error(err))

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className='card-body' onSubmit={handleSubmit(handleRegister)}>

                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input className='input input-bordered w-full' placeholder='Name' {...register("name", { required: true })} />
                            {errors.name && <span className='text-red-500 text-sm italic'>Name is required</span>}

                            <label className="label">
                                <span className="label-text">Account Category</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs" {...register("category", { required: true })} >
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input className='input input-bordered w-full' placeholder='Email' {...register("email", { required: true })} />
                            {errors.email && <span className='text-red-500 text-sm italic'>Email is required</span>}
                            {/* register your input into the hook by invoking the "register" function */}

                            {/* include validation with required or other standard HTML validation rules */}

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input className='input input-bordered w-full' placeholder='Password' {...register("password", { required: true })} />
                            {errors.password && <span className='text-red-500 text-sm italic'>Password is required</span>}
                            {/* errors will return when field validation fails  */}

                            <input className='btn btn-primary' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;