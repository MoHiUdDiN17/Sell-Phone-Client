import React from 'react';
import './EachOrder.css'
const EachOrder = ({ order, i }) => {
    const { PhoneName, price, PhotoUrl } = order;
    return (
        <>
            <tr className="hover">
                <td>{i + 1}</td>
                <img src={PhotoUrl} alt="Shoes" className="smallsize" />
                <td>{PhoneName}</td>
                <td>{price}</td>
                <td>pending</td>
            </tr>
        </>
    );
};

export default EachOrder;