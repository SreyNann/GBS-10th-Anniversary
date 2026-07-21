// pages/AdminLogin.tsx
import { useState } from "react";

const AdminLogin = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const checkPass = () => {
    if (password === "admin123") {
      setError(false);
      onLoginSuccess();
    } else {
      setError(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      checkPass();
    }
  };

  return (
    <div className="db-login">
      <div style={{ fontSize: 42, marginBottom: 14 }}>🔐</div>
      <h3>Admin Access</h3>
      <p>Enter your admin password to view RSVP responses</p>

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button className="db-login-btn" onClick={checkPass}>
        Enter Dashboard
      </button>

      {error && (
        <div className="db-err">Incorrect password. Please try again.</div>
      )}

      <p className="db-hint">
        Default password: <strong>admin123</strong>
      </p>
    </div>
  );
};

export default AdminLogin;
