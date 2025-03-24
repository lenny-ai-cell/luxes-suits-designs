import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            setLoading("Please wait as we submit your data...");
            const data = new FormData();
            data.append("username", username);
            data.append("email", email);
            data.append("phone", phone);
            data.append("password", password);

            const response = await axios.post("https://Atwoli.pythonanywhere.com/api/signup", data);

            setLoading("");
            setSuccess(response.data.success);
        } catch (error) {
            setLoading("");
            setError("Something went wrong");
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2 className="signup-title">Sign Up</h2>
                <b className="error-message">{error}</b>
                <b className="loading-message">{loading}</b>
                <b className="success-message">{success}</b>
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
                        type="email"
                        className="input-field"
                        placeholder="Enter Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <input
                        type="tel"
                        placeholder="Enter Phone"
                        className="input-field"
                        required
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <br />
                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="input-field"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button className="submit-button">Sign Up</button>
                </form>
                <p className="signin-link">Already have an account? <Link to="/signin">Sign In</Link></p>
            </div>
        </div>
    );
};

export default SignUp;
