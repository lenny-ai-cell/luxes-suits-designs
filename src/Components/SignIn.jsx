import { Axios } from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");
    let navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            setError("");
            setLoading("Please wait...");

            const data = new FormData();
            data.append("username", username);
            data.append("password", password);

            const response = await Axios.post("https://Atwoli.pythonanywhere.com/api/signin", data);

            if (response.data.user) {
                localStorage.setItem("user", JSON.stringify(response.data.user));
                navigate("/");
            } else {
                setLoading("");
                setError(response.data.message);
            }
        } catch (error) {
            setLoading("");
            setError("Something went wrong");
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-card">
                <h2 className="signin-title">Sign In</h2>
                <b className="error-message">{error}</b>
                <b className="loading-message">{loading}</b>
                <form onSubmit={submitForm}>
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Enter Username"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <input
                        type="password"
                        className="input-field"
                        placeholder="Enter Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button className="submit-button">Sign In</button>
                </form>
                <p className="signup-link">
                    Don't have an Account? <Link to="/signup">Sign Up</Link>
                </p>
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

export default SignIn;
