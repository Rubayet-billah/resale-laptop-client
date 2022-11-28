import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const BookingModal = ({ bookedProduct, setBookedProduct }) => {
    const { image, name, resalePrice, originalPrice, usingTime, location, seller, description, condition, _id } = bookedProduct;
    const { user } = useContext(AuthContext);

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const phone = form.phone.value;
        const meetingLocation = form.meetingLocation.value;
        const booking = {
            bookingDate: format(new Date(), 'PP'),
            buyer: user.displayName,
            email: user.email,
            productName: name,
            productId: _id,
            image,
            price: resalePrice,
            phone,
            meetingLocation,
        }
        // store booking on database
        fetch('https://assignment-12-server-rubayet-billah.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        }).then(res => res.json())
            .then(data => {
                toast.success('Product Booked Successfully')
                setBookedProduct(null)
            })
    }
    return (
        <div>
            {/* The button to open modal */}
            {/* <label htmlFor="booking-modal" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p>Price: <span className='font-bold text-primary'>${resalePrice}</span></p>
                    <hr />
                    <p>User Info</p>
                    <form onSubmit={handleBooking}>
                        <input type="text" defaultValue={user?.displayName} className="input input-bordered w-full my-1" disabled />
                        <input type="text" defaultValue={user?.email} className="input input-bordered w-full my-1" disabled />
                        <input type="text" placeholder="Contact Number" name='phone' className="input input-bordered w-full my-1" required />
                        <input type="text" placeholder="Meeting Location" name='meetingLocation' className="input input-bordered w-full my-1" required />
                        <input type="submit" className='btn btn-primary w-full my-1' value="Confirm Booking" required />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;