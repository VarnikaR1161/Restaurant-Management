import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const amount = location.state?.amount;
  const paymentMethod = location.state?.method;

  const goHome = () => {
    navigate('/');
  };

  if (!amount || !paymentMethod) {
    return (
      <div className="confirmation-container">
        <div className="confirmation-box">
          <h2>⚠️ Payment Info Missing</h2>
          <p>Please go back and try the payment again.</p>
          <button className="home-btn" onClick={goHome}>Go to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="confirmation-container">
      <div className="confirmation-box">
        <h2>✅ Payment Successful!</h2>
        <p><strong>Amount Paid:</strong> ₹{amount.toFixed(2)}</p>
        <p><strong>Payment Method:</strong> {paymentMethod}</p>
        <p>Thank you for your order 🎉</p>
        <button className="home-btn" onClick={goHome}>Go to Home</button>
      </div>

      <style>{`
        .confirmation-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-family: Arial, sans-serif;
          background: #f8fff8;
        }
        .confirmation-box {
          background: #e6ffe6;
          padding: 40px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .confirmation-box h2 {
          color: #28a745;
          margin-bottom: 20px;
        }
        .confirmation-box p {
          font-size: 18px;
          margin: 8px 0;
        }
        .home-btn {
          margin-top: 20px;
          background-color: #28a745;
          color: white;
          border: none;
          padding: 12px 24px;
          font-size: 16px;
          border-radius: 6px;
          cursor: pointer;
        }
        .home-btn:hover {
          background-color: #218838;
        }
      `}</style>
    </div>
  );
}

export default ConfirmationPage;
