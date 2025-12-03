import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      onLogin();
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/login-1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        className="shadow"
        style={{
          backdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.12)',
          borderRadius: '20px',
          padding: '30px',
          width: '100%',
          maxWidth: '400px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
          color: '#fff',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <h2 className="text-center mb-4" style={{ fontWeight: 'bold' }}>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" style={{ fontWeight: '500' }}>Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={credentials.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
              style={{ borderRadius: '10px' }}
            />
          </div>
          <div className="mb-4">
            <label className="form-label" style={{ fontWeight: '500' }}>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
              style={{ borderRadius: '10px' }}
            />
          </div>
          <button
            type="submit"
            className="btn w-100"
            style={{
              background: 'linear-gradient(135deg, #f857a6 0%, #ff5858 100%)',
              border: 'none',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '10px',
              padding: '10px 0',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            Login
          </button>
        </form>

        <p className="text-center mt-3" style={{ fontSize: '0.9rem', color: '#fff', opacity: 0.85 }}>
          Hint: <b>admin</b> / <b>admin123</b>
        </p>
      </div>
    </div>
  );
}

export default Login;
