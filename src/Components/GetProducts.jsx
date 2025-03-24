import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const GetProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    const img_url = "https://Atwoli.pythonanywhere.com/static/images/";
    const navigate = useNavigate();

    const getproducts = async () => {
        setError("");
        setLoading("Please wait...Receiving products...");
        try {
            const response = await axios.get("https://Atwoli.pythonanywhere.com/api/getproducts");
            setProducts(response.data);
            setFilteredProducts(response.data);
            setLoading(""); // Set empty string once data is received
        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    };

    const handleSearch = (value) => {
        const filtered = products.filter((product) => 
            product.product_name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    useEffect(() => {
        getproducts();
    }, []);

    return (
        <div className="row">
            <b className="text-warning">{loading}</b>
            <b className="text-danger">{error}</b>
            
            {/* Navbar */}
            <nav className="m-4">
                <Link className="btn btn-dark mx-2" to="/">Home</Link>
                <Link className="btn btn-dark mx-2" to="/addproducts">Add Products</Link>
                <Link className="btn btn-dark mx-2" to="/signin">Sign In</Link>
                <Link className="btn btn-dark mx-2" to="/signup">Sign Up</Link>
            </nav>

            {/* Search Input */}
            <div className="justify-content-center m-3">
                <div className="col-md-6">
                    <input 
                        type="text" 
                        placeholder="Search for a product by name" 
                        className="form-control" 
                        onChange={(e) => handleSearch(e.target.value)} 
                    />
                </div>
            </div>

            {/* Products Display */}
            <div className="row">
                {filteredProducts.map((product, index) => (
                    <div className="col-md-3 justify-content-center mb-4" key={index}>
                        <div className="card shadow">
                            <img src={img_url + product.product_photo} className="product_img" alt={product.product_name} />
                            <div className="card-body">
                                <h5 className="mt-2">{product.product_name}</h5>
                                <p className="text-muted">{product.product_desc.slice(0, 70)}...</p>
                                <b className="text-warning">{product.product_cost} KSh</b>

                                <button 
                                    className="btn btn-success w-100" 
                                    onClick={() => navigate("/singleproduct", { state: { product } })}
                                >
                                    View Product
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
{/* Footer */}
<section className="row text-white bg-warning p-4">
    {/* About Us Section */}
    <div className="col-md-4">
        <h4 className="text-center">About Us</h4>
        <p className="text-center">
            Luxes Suits Designs is your premier destination for luxurious, custom-made suits. Our designs reflect elegance, sophistication, and unparalleled craftsmanship. We specialize in creating tailor-made pieces that match your personal style and taste.
        </p>
    </div>

    {/* Contact Us Section */}
    <div className="col-md-4">
        <h4 className="text-center">Contact Us</h4>
        <form action="#" method="POST">
            <input 
                type="email" 
                placeholder="Enter your email" 
                className="form-control mb-2" 
                required 
                aria-label="Email Address" 
            />
            <textarea 
                name="message" 
                id="message" 
                className="form-control mb-2" 
                placeholder="Leave a comment" 
                rows="7" 
                required 
                aria-label="Message"
            ></textarea>
            <button type="submit" className="btn btn-dark w-100">Submit</button>
        </form>
    </div>

    {/* Stay Connected Section */}
    <div className="col-md-4">
        <h4 className="text-center">Stay Connected</h4>
        <div className="d-flex justify-content-center">
            <a href="https://facebook.com">
                <img 
                    src="public/facebook.png" 
                    alt="" 
                    style={{ width: 30, height: 30 }} 
                />
            </a>
            <a href="https://instagram.com">
                <img 
                    src="public/instagram.jpeg" 
                    alt="" 
                    style={{ width: 30, height: 30 }}   
                />
            </a>
            <a href="https://wa.me/+254729336429">
                        <img src="public/whatapp.png" alt="" 
                          style={{ width: 30, height: 30 }}  
                          />
                    </a>
        </div>
        <p className="text-center text-dark mt-2">Follow us for the latest updates and promotions!</p>
    </div>
</section>

{/* Footer Bottom */}
<footer className="text-white bg-success text-center p-3">
    <p>&copy; 2025 Luxes Suits Designs. All Rights Reserved.</p>
    <p className="text-muted">Designed by L. Mutuma</p>
</footer>

        </div>
    );
};

export default GetProducts;
