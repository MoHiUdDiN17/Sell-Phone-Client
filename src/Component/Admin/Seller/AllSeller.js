import React, { useEffect, useState } from 'react';
import EachSeller from './EachSeller';

const AllSeller = () => {
    const [allSellers, setAllSellers] = useState([]);

    const handleDelete = id => {
        fetch(`https://assignment-12-pi.vercel.app/user-delete/${id}`, {
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
                    setAllSellers(remaining);
                }
            })
    }
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://assignment-12-pi.vercel.app/user?role=Seller`, {
                // headers: {
                //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
                // }
            });
            const data = await response.json();
            setAllSellers(data);
        }
        fetchData();
    }, [allSellers])
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allSellers.map((euser, i) =>
                            <EachSeller
                                euser={euser}
                                handleDelete={handleDelete}
                                i={i}
                            ></EachSeller>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllSeller;