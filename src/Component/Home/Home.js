import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import EachPhone from '../EachPhone/EachPhone';
import Categories from '../Pages/Categories';
import './Home.css'
import img from './img.jpg'
const Home = () => {
    const categories = useLoaderData();
    const [advertise, setAdvertise] = useState([]);
    const phone = useLoaderData();
    const [id, setId] = useState(null);
    const [phoneName, setPhoneName] = useState(null);
    const [price, setPrice] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://assignment-12-pi.vercel.app/advertise`, {
                // headers: {
                //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
                // }
            });
            const data = await response.json();
            setAdvertise(data);
        }
        fetchData();
    }, [])
    return (
        <div className='bg-base-200 pt-10'>
            <div className="hero py-40">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">More About Sell-Phone!</h1>
                        <p className="py-6">Sell-Phone is a secondhand phone selling website.It provides this trusted service around four years.Sell-Phone only provides its services in Bangladesh.</p>
                    </div>
                </div>
            </div>

            <h1 className="text-5xl font-bold mb-10 ml-10">Categories</h1>
            <div className='lg:flex mb-10'>
                {
                    categories.map(category => <Categories
                        category={category}
                    ></Categories>)
                }
            </div>
            {
                advertise.length > 0 ?
                    <div className='mb-10'>
                        <h1 className="text-5xl font-bold mb-10 ml-10">Advertise Items</h1>
                        <div className='lg:flex'>
                            {
                                advertise.map(eachPhone =>
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
                    </div> :
                    ""
            }

        </div>
    );
};

export default Home;