import React from 'react';
import { Link } from 'react-router-dom';
import './categories.css'
const Categories = (props) => {
    const { _id, name, PhotoUrl } = props.category;
    return (
        <div className='mb-5 m-auto'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={PhotoUrl} alt="Shoes" className="resize" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <Link to={`/category/${name}`}>
                        <div className="card-actions">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Categories;