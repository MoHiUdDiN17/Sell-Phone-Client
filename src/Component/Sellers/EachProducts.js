import React from 'react';
import './sellers.css'
const EachProducts = ({ i, euser, handleDelete }) => {
    const { _id, name, PhotoUrl, location, company, resalePrice, originalPrice, yearsOfUse, posted, sellerName, status } = euser;
    const handleAdvertise = () => {
        const advertise = { name, PhotoUrl, location, company, resalePrice, originalPrice, yearsOfUse, posted, sellerName, status };
        fetch("http://localhost:5000/advertise", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                // authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(advertise)
        })
            .then((response) => response.json())
            .then((data) => {
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    return (
        <>
            <tr className="hover">
                <td>{i + 1}</td>
                <td>{name}</td>
                <img src={PhotoUrl} alt="Shoes" className="smallsize" />
                <td>{status}</td>
                <td><i onClick={() => handleDelete(_id)} class="fa-solid fa-trash"></i></td>
                <td className='text-primary underline' onClick={handleAdvertise} >Advertise</td>


            </tr>
        </>
    );
};

export default EachProducts;