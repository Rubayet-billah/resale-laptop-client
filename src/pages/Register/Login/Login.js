import React, { useContext } from 'react';
import { FaGooglePlusSquare } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import getToken from '../../../Hooks/getToken/getToken';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { setRoleState, loginUser, googleLogin } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (data) => {
        const { email, password } = data;
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('form user', user.email)
                getToken(user.email)
                setRoleState(false)
                // navigate('/')
                navigate(from, { replace: true })
                // window.location.reload()
            })
            .catch(err => console.error(err))
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                // const user = res.user;

                const { displayName, email, uid } = res.user;
                const user = {
                    name: displayName,
                    email,
                    role: "Customer",
                    userId: uid
                }


                fetch('https://assignment-12-server-eta.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('get token login 54', email)
                        getToken(email)
                        setRoleState(false)
                        navigate(from, { replace: true })
                    })
                // navigate('/')
                // window.location.reload();
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