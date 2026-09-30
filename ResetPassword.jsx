import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setMessage("");
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/password-reset/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Password reset failed."
        );
      }

      setMessage(
        "Password reset successfully. You can now log in with your new password."
      );

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Reset password error:", error);
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
            Create a New Password.
          </h1>

          <p className="aquvana-section-description">
            Enter a new password for your AQUVANA account.
          </p>
        </div>

        <div className="aquvana-card">
          <h2 className="aquvana-card-title">
            Reset Password
          </h2>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="password"
                className="aquvana-form-label"
              >
                New Password
              </label>

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                className="aquvana-form-input"
                placeholder="Enter new password"
                minLength="6"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                style={{ marginTop: "8px" }}
              >
                {showPassword
                  ? "Hide Password"
                  : "Show Password"}
              </button>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="confirmPassword"
                className="aquvana-form-label"
              >
                Confirm New Password
              </label>

              <input
                id="confirmPassword"
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                value={confirmPassword}
                onChange={(event) =>
                  setConfirmPassword(event.target.value)
                }
                className="aquvana-form-input"
                placeholder="Confirm new password"
                minLength="6"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                style={{ marginTop: "8px" }}
              >
                {showConfirmPassword
                  ? "Hide Password"
                  : "Show Password"}
              </button>
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
                ? "Resetting Password..."
                : "Reset Password"}
            </button>
          </form>

          <p style={{ marginTop: "24px" }}>
            <Link to="/login">
              Back to Login
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default ResetPassword;