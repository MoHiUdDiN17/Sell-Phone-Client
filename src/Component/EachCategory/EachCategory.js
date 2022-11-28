import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import EachPhone from '../EachPhone/EachPhone';

const EachCategory = () => {
    const phone = useLoaderData();
    const [id,setId]=useState(null);
    const [phoneName, setPhoneName] = useState(null);
    const [price, setPrice] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null);
    return (
        <div>
            <div className='lg:flex'>
                {
                    phone.map(eachPhone =>
                        <EachPhone
                            eachPhone={eachPhone}
                            setPhoneName={setPhoneName}
                            setPrice={setPrice}
                            setPhotoUrl={setPhotoUrl}
                            setId={setId}
                        ></EachPhone>
                    )
                }
            </div>
            {
                phoneName && price &&
                <BookingModal
                    phoneName={phoneName}
                    price={price}
                    setPhoneName={setPhoneName}
                    photoUrl={photoUrl}
                    id={id}
                ></BookingModal>}
        </div>
    );
};

export default EachCategory;