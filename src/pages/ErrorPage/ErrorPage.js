import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className='text-center mt-8 md:mt-40'>
            <h1 className='text-red-500 font-bold text-4xl md:text-8xl'>Opps !</h1>
            <p className='text-xl my-3'>An unexpected error occured :( </p>
            <p><i>{error.status}</i> || <i>{error.statusText}</i></p>
        </div>
    );
};

export default ErrorPage;