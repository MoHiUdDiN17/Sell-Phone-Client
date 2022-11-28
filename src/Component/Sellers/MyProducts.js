import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import EachProducts from './EachProducts';

const MyProducts = () => {
    const [sellerProducts, setSellerProducts] = useState([]);
    const { user } = useContext(AuthContext);
    const [id, setId] = useState(null);


    const handleDelete = id => {
        fetch(`https://assignment-12-pi.vercel.app/delete/${id}`, {
            method: 'DELETE',
            headers: {
                // authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remaining = data.filter(odr => odr._id !== id);
                    setSellerProducts(remaining);
                }
            })
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://assignment-12-pi.vercel.app/myproducts?email=${user.email}`, {
                // headers: {
                //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
                // }
            });
            const data = await response.json();
            setSellerProducts(data);
        }
        fetchData();
    }, [sellerProducts])
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>status</th>
                        <th>Delete</th>
                        <th>Advertise</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellerProducts.map((euser, i) =>
                            <EachProducts
                                euser={euser}
                                handleDelete={handleDelete}
                                i={i}
                            ></EachProducts>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;