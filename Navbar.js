import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ isLoggedIn, userRole, onLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">Taco Street</Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {isLoggedIn ? (
            <>
              {/* Home link is shown for both admin and user */}
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>

              {/* Admin: Only show Manager */}
              {userRole === 'admin' && (
                <li className="nav-item"><Link className="nav-link" to="/managerpage">Manager</Link></li>
              )}

              {/* User: Show rest of the fields */}
              {userRole === 'user' && (
                <>
                  {/* <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li> */}
                  <li className="nav-item"><Link className="nav-link" to="/aboutteam">About</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/service">Service</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/menu">Menu</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/checkout">Orders</Link></li>
                </>
              )}

              {/* Logout button */}
              <li className="nav-item">
                <button className="btn btn-sm btn-outline-light ms-3" onClick={handleLogoutClick}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              {/* Not logged in: show login options */}
              
              {/* <li className="nav-item"><Link className="nav-link" to="/signup">Signup</Link></li> */}
              <li className="nav-item"><Link className="nav-link" to="/userlogin">User Login</Link></li> 
              <li className="nav-item"><Link className="nav-link" to="/login">Admin Login</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
