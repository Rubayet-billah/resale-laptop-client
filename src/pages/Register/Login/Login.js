import React, { useContext } from 'react';
import { FaGooglePlusSquare } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { loginUser, googleLogin } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleLogin = (data) => {
        const { email, password } = data;
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err))
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                const user = res.user;
                console.log(user)
            }).catch(err => console.error(err))
    }
    return (
        <div>
            <div>
                <div className="mt-5 md:mt-12">
                    <div className="text-center my-6">
                        <h1 className="text-5xl font-bold">Login Here</h1>
                    </div>
                    <div className="card w-full md:w-1/2 shadow-2xl bg-base-100 mx-auto">
                        <form className='card-body' onSubmit={handleSubmit(handleLogin)}>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input className='input input-bordered w-full' type='email' placeholder='Email' {...register("email", { required: true })} />
                            {errors.email && <span className='text-red-500 text-sm italic'>Email is required</span>}

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input className='input input-bordered w-full' type='password' placeholder='Password' {...register("password", { required: true })} />
                            {errors.password && <span className='text-red-500 text-sm italic'>Password is required</span>}
                            <input className='btn btn-primary my-3' type="submit" />
                        </form>
                        <hr />
                        <div className='text-center mb-3'>
                            <small className=''>other login options</small>
                            <p onClick={handleGoogleLogin}><FaGooglePlusSquare className='h-8 w-8 text-green-500 mx-auto mt-1' /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;