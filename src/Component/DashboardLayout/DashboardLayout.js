import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Header from '../Header/Header';

const DeshboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://assignment-12-pi.vercel.app/users?email=${user.email}`, {
                // headers: {
                //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
                // }
            });
            const data = await response.json();
            setCurrentUser(data);
        }
        fetchData();
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col mx-5">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            currentUser[0]?.role === "Buyer" ?
                                <>
                                    <li><Link to="/dashboard/my-order">My orders</Link></li>
                                </>
                                :
                                ""
                        }
                        {
                            currentUser[0]?.role === "Seller" ?
                                <>

                                    <li><Link to="/dashboard/add-product">Add A Product</Link></li>
                                    <li><Link to="/dashboard/my-products">My Products</Link></li>
                                    <li> <Link to="/dashboard/my-Buyers">My Buyers</Link></li>
                                </>
                                :
                                ""
                        }
                        {
                            currentUser[0]?.role === "Admin" ?
                                <>

                                    <li><Link to="/dashboard/all-sellers">All Sellers</Link></li>
                                    <li><Link to="/dashboard/all-buyers">All Buyers</Link></li>
                                    <li><Link to="/dashboard/reported-items">Reported Items</Link></li>
                                </>
                                :
                                ""
                        }






                    </ul>

                </div>
            </div>
        </div >
    );
};

export default DeshboardLayout;