import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleProduct = () => {
    let [phone, setPhone] = useState("");
    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("");
    let [error, setError] = useState("");

    const { product } = useLocation().state || {};
    const img_url = "https://Atwoli.pythonanywhere.com/static/images/";

    const submitForm = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading("Please wait as we process payment...");
        try {
            const data = new FormData();
            data.append("phone", phone);
            data.append("amount", product.product_cost);

            const response = await axios.post("https://Atwoli.pythonanywhere.com/api/mpesa_payment", data);
            setLoading("");
            setSuccess(response.data.message);
        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    };

    return (
        <div className="">
            <div className="row justify-content-center mt-3">
                <nav className="m-4">
                    <Link className="btn btn-dark mx-2" to="/">Home</Link>
                    <Link className="btn btn-dark mx-2" to="/addproducts">Add Products</Link>
                    <Link className="btn btn-dark mx-2" to="/signin">Sign In</Link>
                    <Link className="btn btn-dark mx-2" to="/signup">Sign Up</Link>
                </nav>
                <div className="col-md-3 card shadow">
                    <img src={img_url + product.product_photo} alt="" />
                </div>
                <div className="col-md-3 card shadow">
                    <h2>{product.product_name}</h2>
                    <h3 className="text-warning">{product.product_cost}</h3>
                    <p>{product.product_desc}</p>

                    <b className="text-warning">{loading}</b>
                    <b className="text-danger">{error}</b>
                    <b className="text-success">{success}</b>
                    <form onSubmit={submitForm}>
                        <input type="number" required readOnly value={product.product_cost} className="form-control" /><br />
                        <input type="tel" required onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Enter Mpesa No 2547xxxxxxxx" /><br />
                        <button className="btn btn-primary">Pay Now</button>
                    </form>
                </div>
            </div>

            {/* Stay Connected Section */}
            <div className="col-md-4">
                <h4 className="text-center">Stay Connected</h4>
                <div className="d-flex justify-content-center">
                    <a href="https://facebook.com">
                        <img 
                            src="public/facebook.png" 
                            alt="Facebook" 
                            style={{ width: 30, height: 30 }} 
                        />
                    </a>
                    <a href="https://instagram.com">
                        <img 
                            src="public/instagram.jpeg" 
                            alt="Instagram" 
                            style={{ width: 30, height: 30 }}   
                        />
                    </a>
                    <a href="https://wa.me/+254729336429">
                        <img 
                            src="public/whatapp.png" 
                            alt="WhatsApp" 
                            style={{ width: 30, height: 30 }}  
                        />
                    </a>
                </div>
                <p className="text-center text-dark mt-2">Follow us for the latest updates and promotions!</p>
            </div>

            {/* Footer Bottom */}
            <footer className="text-white bg-success text-center p-3">
                <p>&copy; 2025 Luxes Suits Designs. All Rights Reserved.</p>
                <p className="text-muted">Designed by L. Mutuma</p>
            </footer>
        </div>
    );
};

export default SingleProduct;
