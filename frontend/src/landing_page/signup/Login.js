import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3002/login",
                {
                    email,
                    password,
                }
            );
            localStorage.setItem("token", response.data.token);
            window.location.href = "http://localhost:3001";

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
                <h2 style={{ textAlign: "center" }}>Login</h2>
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
                    onClick={handleLogin}
                    style={{
                        width: "100%",
                        padding: "10px",
                        cursor: "pointer",
                    }}
                >
                    Login
                </button>
                <p style={{ textAlign: "center", marginTop: "15px" }}>
    Dont Have have an account?{" "}
    <Link to="/Signup">Signup</Link>
</p>
            </div>
        </div>
    );
}

export default Login;