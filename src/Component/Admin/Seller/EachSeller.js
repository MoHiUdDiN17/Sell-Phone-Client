import React from 'react';

const EachSeller = ({ i, euser, handleDelete }) => {
    const { _id, name, email } = euser;
    return (
        <>
            <tr className="hover">
                <td>{i + 1}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td><i onClick={() => handleDelete(_id)} class="fa-solid fa-trash"></i></td>
            </tr>
        </>
    );
};

export default EachSeller;