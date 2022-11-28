import React from 'react';

const Banner = () => {
    return (
        <div className='my-5'>
            <div className="hero min-h-[70vh]" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to <span className='text-orange-400'>ReSeller</span></h1>
                        <p className="mb-5"><b>ReSeller</b> is the largest and most reliable Resale Laptop Shop in BD. Whether you are a freelancer, office goer, or student - <b>ReSeller</b> Laptop Shop has the perfect device for you. Gamers love our collection of Gaming Laptops because we always bring the latest configuration devices to Bangladesh. Your budget is our top concern. Get an Intel Laptop or AMD Laptop within your desired price tag from <b>ReSeller</b>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;