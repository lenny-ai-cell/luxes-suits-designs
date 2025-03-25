import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Carousel from "./Carousel";


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

            <Carousel/>
            
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

            <Footer/>
        </div>
    );
};

export default GetProducts;
