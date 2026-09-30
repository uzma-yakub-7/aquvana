import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const [showPassword, setShowPassword] = useState(false);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed.");
      }

      localStorage.setItem("aquvana_token", data.token);
      localStorage.setItem(
        "aquvana_user",
        JSON.stringify(data.user)
      );

      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="aquvana-page">
      <section className="aquvana-section">
        <div className="aquvana-section-header">
          <span className="aquvana-section-label">
            AQUVANA ACCOUNT
          </span>

          <h1 className="aquvana-section-title">
            Welcome Back.
          </h1>

          <p className="aquvana-section-description">
            Log in to manage your AQUVANA garden, crops, tasks,
            maintenance, and harvests.
          </p>
        </div>

        <div className="aquvana-card">
          <h2 className="aquvana-card-title">
            Log in
          </h2>

          <form onSubmit={handleSubmit}>

            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="email"
                className="aquvana-form-label"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="aquvana-form-input"
                placeholder="you@example.com"
                required
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="password"
                className="aquvana-form-label"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                className="aquvana-form-input"
                placeholder="Enter your password"
                required
              />

              <button
  type="button"
  onClick={() => setShowPassword(!showPassword)}
  style={{ marginTop: "8px" }}
>
  {showPassword ? "Hide Password" : "Show Password"}
</button>

            </div>

            {error && (
              <p
                style={{
                  marginBottom: "20px",
                  color: "#b42318",
                }}
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="aquvana-button aquvana-button-primary"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log in"}
            </button>

          </form>
          
          <p style={{ marginTop: "16px" }}>
  <Link to="/forgot-password">
    Forgot your password?
  </Link>
</p>
          <p style={{ marginTop: "24px" }}>
            Don't have an account?{" "}
            <Link to="/register">
              Create one
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Login;