import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/password-reset/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setMessage(
        "If the account exists, a password reset link has been generated. Check the AQUVANA server terminal."
      );
    } catch (error) {
      console.error("Forgot password error:", error);
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
            PASSWORD RECOVERY
          </span>

          <h1 className="aquvana-section-title">
            Reset Your Password.
          </h1>

          <p className="aquvana-section-description">
            Enter your AQUVANA account email to generate a
            temporary password reset link.
          </p>
        </div>

        <div className="aquvana-card">
          <h2 className="aquvana-card-title">
            Forgot Password?
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
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="aquvana-form-input"
                placeholder="you@example.com"
                required
              />
            </div>

            {message && (
              <p
                style={{
                  marginBottom: "20px",
                  color: "#18794e",
                }}
              >
                {message}
              </p>
            )}

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
              {loading
                ? "Generating Link..."
                : "Generate Reset Link"}
            </button>
          </form>

          <p style={{ marginTop: "24px" }}>
            Remember your password?{" "}
            <Link to="/login">
              Log in
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default ForgotPassword;