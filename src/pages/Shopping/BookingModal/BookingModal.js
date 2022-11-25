import React from 'react';

const BookingModal = ({ bookedProduct }) => {
    const { image, name, resalePrice, originalPrice, usingTime, location, seller, description, condition } = bookedProduct;
    return (
        <div>
            {/* The button to open modal */}
            {/* <label htmlFor="booking-modal" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{resalePrice}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full my-1" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full my-1" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full my-1" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full my-1" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full my-1" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full my-1" />
                </div>
            </div>
        </div>
    );
};

export default BookingModal;