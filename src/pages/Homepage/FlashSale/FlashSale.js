import React from 'react';
import flashSale from '../../../assets/flashSale.webp'

const FlashSale = () => {
    return (
        <div>
            <div className="hero bg-base-200 md:mt-12 lg:py-24">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={flashSale} className="w-full md:max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='lg:ml-12'>
                        <h1 className="text-5xl font-bold text-center">Special Offer!</h1>
                        <p className="py-6">Upto 70% discount on these items.To get these offer subscribe to our website and get the special voucher.</p>
                        <div className='grid grid-cols-2 md:grid-cols-6 gap-5 mb-5'>
                            <img className='w-32 rounded' src='https://images.unsplash.com/photo-1544099858-75feeb57f01b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt="" />
                            <img className='w-32 rounded' src='https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt="" />
                            <img className='w-32 rounded' src='https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt="" />
                            <img className='w-32 rounded' src='https://images.unsplash.com/photo-1558864559-ed673ba3610b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGxhcHRvcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt="" />
                            <img className='w-32 rounded' src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGxhcHRvcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt="" />
                            <img className='w-32 rounded' src='https://images.unsplash.com/photo-1597673030062-0a0f1a801a31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGxhcHRvcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt="" />
                        </div>
                        <button className="btn btn-sm btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashSale;