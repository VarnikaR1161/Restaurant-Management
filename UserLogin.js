import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogin = ({ onLogin }) => {
  // Dummy data for testing
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      }

      const result = await response.json();
      localStorage.setItem('loggedInUser', JSON.stringify(result));

      onLogin('home');
      navigate('/');

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{
      backgroundImage: 'url("/user.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <div style={{
        backdropFilter: 'blur(10px)',
        background: 'rgba(255, 255, 255, 0.12)',
        borderRadius: '20px',
        padding: '30px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
        color: '#fff',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}>
        <h2 className="text-center mb-4" style={{ fontWeight: 'bold' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='your Email'
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              placeholder='password'
              required
            />
          </div>

          <button type="submit" className="btn w-100 btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
