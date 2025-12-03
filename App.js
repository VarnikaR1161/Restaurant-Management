import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Login from './components/Login';
import UserLogin from './components/UserLogin';
import { CartProvider } from './components/CartContext';
import ManagerPage from './components/ManagerPage';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import Contact from './components/Contact';
import AboutTeam from './components/AboutTeam';
import Services from './components/Services';
import Footer from './components/Footer'; 
import InvoicePage from './components/Invoicepage';
import Signup from './components/Signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(() => {
    return !!localStorage.getItem("userToken");
  });

  const [userRole, setUserRole] = React.useState(() => {
    return localStorage.getItem("userRole") || "";
  });

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
    localStorage.setItem("userToken", "dummyToken123");
    localStorage.setItem("userRole", role);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole("");
    localStorage.removeItem("userToken");
    localStorage.removeItem("userRole");
  };

  const PrivateRoute = ({ element }) =>
    isLoggedIn ? element : <Navigate to="/userlogin" replace />;

  return (
    <CartProvider>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} userRole={userRole} onLogout={handleLogout} />
        <div className="container mt-4">
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login onLogin={() => handleLogin("admin")} />} />
              {/* <Route path='/signup' element={<Signup onLogin={() => handleLogin(Signup)}/>}  */}
            <Route path="/userlogin" element={<UserLogin onLogin={() => handleLogin("user")} />} />

            {/* Private Routes */}
            <Route path="/" element={<PrivateRoute element={<Home />} />} />
            <Route path="/contact" element={<PrivateRoute element={<Contact />} />} />
            <Route path="/aboutteam" element={<PrivateRoute element={<AboutTeam />} />} />
            <Route path="/service" element={<PrivateRoute element={<Services />} />} />
            <Route path="/footer" element={<PrivateRoute element={<Footer />} />} />
            <Route path="/managerpage" element={<PrivateRoute element={<ManagerPage />} />} />
            <Route path="/menu" element={<PrivateRoute element={<Menu />} />} />
            <Route path="/checkout" element={<PrivateRoute element={<Checkout />} />} />
            <Route path="/payment" element={<PrivateRoute element={<Payment />} />} />
            <Route path="/invoice" element={<InvoicePage />} />
            <Route path="/confirmation" element={<PrivateRoute element={<Confirmation />} />} />

            {/* Catch-all route */}
            <Route path="*" element={<Navigate to={isLoggedIn ? '/' : '/userlogin'} replace />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
