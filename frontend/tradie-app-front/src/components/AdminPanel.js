import React from 'react';
import './AdminPanel.css';

function AdminPanel() {
  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>
      <p>Welcome, Admin! Select an option below to manage the platform:</p>
      
      <div className="admin-actions">
        <div className="action">
          <h3>User Management</h3>
          <button className="admin-button">Manage Users</button>
        </div>
        <div className="action">
          <h3>Service Management</h3>
          <button className="admin-button">Manage Services</button>
        </div>
        <div className="action">
          <h3>Reports</h3>
          <button className="admin-button">View Reports</button>
        </div>
        <div className="action">
          <h3>Content Management</h3>
          <button className="admin-button">Manage Content</button>
        </div>
        <div className="action">
          <h3>Feedback and Rating Management</h3>
          <button className="admin-button">Manage Feedback</button>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;