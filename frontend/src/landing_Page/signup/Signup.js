import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function Auth() {
  // const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError("");

    try {
      const url = isLogin
        ? "http://localhost:8080/api/auth/login"
        : "http://localhost:8080/api/auth/signup";

      const res = await axios.post(url, formData);
      console.log(res.data);
      // SAVE TOKEN
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // REDIRECT TO DASHBOARD
      window.location.href = `http://localhost:3001?token=${res.data.token}&username=${res.data.user.username}`;
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        {error && <p className="error">{error}</p>}

        {!isLogin && (
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={handleChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading
            ? isLogin
              ? "Logging in..."
              : "Creating..."
            : isLogin
              ? "Login"
              : "Create Account"}
        </button>

        {/* 🔁 Toggle */}
        <p className="switch-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Auth;
