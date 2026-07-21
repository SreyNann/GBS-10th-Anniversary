// pages/AdminPage.tsx
import { useState } from "react";
import AdminLogin from "./AdminLogin";
import Dashboard from "./Dashboard";

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="db-overlay">
      <div className="db-modal">
        {!isAuthenticated ? (
          <AdminLogin onLoginSuccess={() => setIsAuthenticated(true)} />
        ) : (
          <Dashboard />
        )}
      </div>
    </div>
  );
};

export default AdminPage;
