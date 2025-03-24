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
        </div>
    );
};

export default SignIn;
