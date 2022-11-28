import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import EachOrder from './EachOrder';
const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://assignment-12-pi.vercel.app/orders?email=${user.email}`, {
                // headers: {
                //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
                // }
            });
            const data = await response.json();
            setOrders(data);
        }
        fetchData();
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Pay</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, i) =>
                            <EachOrder
                                order={order}
                                i={i}
                            ></EachOrder>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;