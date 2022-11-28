import React, { useEffect, useState } from 'react';
import EachBuyer from './EachBuyer';

const AllBuyers = () => {
    const [allBuyers, setAllBuyers] = useState([]);

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
                    setAllBuyers(remaining);
                }
            })
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://assignment-12-pi.vercel.app/user?role=Buyer`, {
                // headers: {
                //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
                // }
            });
            const data = await response.json();
            setAllBuyers(data);
        }
        fetchData();
    }, [allBuyers])
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allBuyers.map((euser, i) =>
                            <EachBuyer
                                euser={euser}
                                handleDelete={handleDelete}
                                i={i}
                            ></EachBuyer>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllBuyers;