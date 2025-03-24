import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const AddProducts = () => {
    let [product_name, setProductName] = useState("");
    let [product_desc, setProductDesc] = useState("");
    let [product_cost, setProductCost] = useState("");
    let [product_photo, setProductPhoto] = useState("");

    const navigate = useNavigate();
    const user = localStorage.getItem("user");
    const checkUser = () => {
        if (!user) {
            localStorage.clear();
            return navigate("/signin");
        }
    };

    useEffect(() => checkUser(), [user]);

    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("");
    let [error, setError] = useState("");

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            setError("");
            setLoading("Please wait...");

            const data = new FormData();
            data.append("product_name", product_name);
            data.append("product_desc", product_desc);
            data.append("product_cost", product_cost);
            data.append("product_photo", product_photo);

            const response = await axios.post("https://Atwoli.pythonanywhere.com/api/addproduct", data);
            setLoading("");
            setSuccess(response.data.success);
            setProductCost("");
            setProductName("");
            setProductDesc("");
        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    };

    return (
        <div className="addproduct-container">
            <nav className="nav-bar">
                <Link className="btn btn-dark mx-2" to="/">Home</Link>
                <Link className="btn btn-dark mx-2" to="/addproducts">Add Products</Link>
                <Link className="btn btn-dark mx-2" to="/signin">Sign In</Link>
                <Link className="btn btn-dark mx-2" to="/signup">Sign Up</Link>
            </nav>
            <div className="addproduct-card">
                <h2 className="addproduct-title">Add Product</h2>
                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                <b className="text-success">{success}</b>
                <form onSubmit={submitForm}>
                    <input
                        type="text"
                        value={product_name}
                        placeholder="Enter Product Name"
                        required
                        onChange={(e) => setProductName(e.target.value)}
                        className="input-field"
                    /><br />
                    <textarea
                        value={product_desc}
                        placeholder="Product Description"
                        required
                        onChange={(e) => setProductDesc(e.target.value)}
                        className="input-field"
                    ></textarea><br />
                    <input
                        type="number"
                        value={product_cost}
                        placeholder="Product Cost"
                        onChange={(e) => setProductCost(e.target.value)}
                        className="input-field"
                    /><br />
                    <label htmlFor="" className="form-label">Product Photo</label><br />
                    <input
                        type="file"
                        onChange={(e) => setProductPhoto(e.target.files[0])}
                        className="input-field"
                    /><br />
                    <button className="submit-button">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;
