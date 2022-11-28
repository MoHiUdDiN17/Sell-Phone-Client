import React from 'react';
import { Link } from 'react-router-dom';

const EachPhone = ({ eachPhone, setPhoneName, setPrice, setPhotoUrl,setId }) => {
    const { _id, name, PhotoUrl, location, company, resalePrice, originalPrice, yearsOfUse, posted, sellerName, status } = eachPhone;
    return (
        <div className='mb-5 m-auto'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={PhotoUrl} alt="Shoes" className="resize" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Company : {company}</p>
                    <p>Location : {location}</p>
                    <p>Resale Price : {resalePrice}</p>
                    <p>Original Price : {originalPrice}</p>
                    <p>posted : {posted}</p>
                    <p>Years Of Use : {yearsOfUse}</p>
                    <p>Seller Name : {sellerName}</p>
                    <p>Status : {status}</p>
                    {/* <Link to={`/category/${name}`}>
                        <div className="card-actions">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </Link> */}
                    <div className="card-actions">
                        <label
                            htmlFor="booking-modal" className="btn btn-primary"
                            onClick={() => {
                                setPhoneName(name);
                                setPrice(resalePrice);
                                setPhotoUrl(PhotoUrl);
                                setId(_id);
                            }}
                        >Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachPhone;