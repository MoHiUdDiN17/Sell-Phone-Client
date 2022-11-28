import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Sellers = () => {
    const { user } = useContext(AuthContext);
    const placeService = event => {
        event.preventDefault();
        const username = user.displayName;
        const email = user.email;
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoURL.value;
        const Price = "$" + form.Price.value;
        const Condition = form.Condition.value;
        const mobile = form.mobile.value;
        const Location = form.Location.value;
        const category = form.category.value;
        const Description = form.Description.value;
        const yearsofuse = form.yearsofuse.value;
        const originalprice = "$" + form.originalprice.value;
        console.log(form.date);
        const posted = form.posted.value;

        const review = {
            sellerName: username,
            email: email,
            name: name,
            PhotoUrl: photoUrl,
            Condition: Condition,
            resalePrice: Price,
            mobile: mobile,
            location: Location,
            company: category,
            Description: Description,
            yearsOfUse: yearsofuse,
            originalPrice: originalprice,
            posted: posted,
            status: "available"
        }
        console.log(review);
        fetch("https://assignment-12-pi.vercel.app/add-product", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                // authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(review)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                if (data.acknowledged) {
                    alert('Review is added successfully')
                    form.reset();
                    Navigate('/dashboard/my-products');
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    return (
        <div className=" bg-base-200 px-20">
            <form onSubmit={placeService}>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photourl</span>
                        </label>
                        <input name="photoURL" type="text" placeholder="Enter Photourl" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price $</span>
                        </label>
                        <input name="Price" type="text" className="input input-bordered" placeholder="Enter Price" required></input>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <select name="Condition" className="input input-bordered" >
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Mobile Number</span>
                        </label>
                        <input name="mobile" type="text" placeholder="Enter Mobile Number" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input name="Location" type="text" placeholder="Enter Location" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Category</span>
                        </label>
                        <select name="category" className="input input-bordered" >
                            <option value="Iphone">Iphone</option>
                            <option value="Samsung">Samsung</option>
                            <option value="Xiaomi">Xiaomi</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input name="Description" type="text" placeholder="Enter Description" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Years Of Use</span>
                        </label>
                        <input name="yearsofuse" type="text" placeholder="Enter Years of use" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input name="originalprice" type="text" placeholder="Enter Original Price" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="posted" className="input input-bordered"></input>
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Sellers;