import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { Navigate, useLocation } from 'react-router-dom';

const BookingModal = ({ phoneName, price, setPhoneName, photoUrl, id }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = phoneName;
        const email = user.email;
        const reprice = price;
        const phoneNum = form.phoneNum.value;
        const meetingLocation = form.meetingLocation.value;
        const ordered = {
            PhoneName: name,
            PhotoUrl: photoUrl,
            userEmail: email,
            price: reprice,
            mobile: phoneNum,
            meetingLocation: meetingLocation,
        }
        setPhoneName(null);
        toast.success('Booking Confirmed');
        fetch("https://assignment-12-pi.vercel.app/order", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                // authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(ordered)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                if (data.acknowledged) {
                    alert('Review is added successfully');
                    fetch(`https://assignment-12-pi.vercel.app/update/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `Bearer ${localStorage.getItem('genius-token')}`
                        },
                        body: JSON.stringify({ status: "sold" })
                    })
                        .then(res => res.json())
                        .then(data => {
                        })
                    form.reset();
                    Navigate(from, { replace: true });
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    console.log(phoneName);
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{phoneName}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-5'>
                        <input type="text" value={user.displayName} disabled className="input input-bordered w-full " />
                        <input type="text" value={user.email} disabled className="input input-bordered w-full " />
                        <input type="text" value={price} disabled className="input input-bordered w-full " />
                        <input type="text" name="phoneNum" placeholder="Enter Phone Number" className="input input-bordered w-full " />
                        <input type="text" name="meetingLocation" placeholder="Enter Meeting Location" className="input input-bordered w-full " />
                        <input className="btn btn-primary w-full" type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;