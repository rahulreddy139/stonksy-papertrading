import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const response = await axios.post(
                "https://stonksy-backend.onrender.com/signup",
                {
                    username,
                    email,
                    password,
                }
            );
            navigate("/dashboard");

            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f5f5f5",
            }}
        >
            <div
                style={{
                    width: "350px",
                    padding: "30px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                }}
            >
                <h2 style={{ textAlign: "center" }}>Sign Up</h2>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "15px",
                        boxSizing: "border-box",
                    }}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "15px",
                        boxSizing: "border-box",
                    }}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "20px",
                        boxSizing: "border-box",
                    }}
                />

                <button
                    type="button"
                    onClick={handleSignup}
                    style={{
                        width: "100%",
                        padding: "10px",
                        cursor: "pointer",
                    }}
                >
                    Sign Up
                </button>
                <p style={{ textAlign: "center", marginTop: "15px" }}>
    Already have an account?{" "}
    <Link to="/login">Log in</Link>
</p>
            </div>
        </div>
    );
}

export default Signup;