import React from "react";
import "./Payment.css";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaPaypal, FaQrcode } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Support both "amount" and "total" in case InvoicePage sends either
  const amount = location.state?.total ?? location.state?.amount;

  const handlePaymentMethod = (method) => {
    navigate("/confirmation", { state: { method, amount } });
  };

  if (amount === undefined) {
    return (
      <div className="payment-container">
        <p className="text-danger">No payment amount provided. Please return to checkout.</p>
        <button className="back-btn" onClick={() => navigate("/checkout")}>
          Go Back to Checkout
        </button>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <h1 className="amount">{amount.toFixed(2)} INR</h1>
      <h2 className="section-title">All Payment Methods</h2>

      <div className="payment-methods">
        <button className="card-btn visa" onClick={() => handlePaymentMethod("Visa Classic")}>
          <FaCcVisa /> Visa Classic •••• 4242
        </button>
        <button className="card-btn mastercard" onClick={() => handlePaymentMethod("Mastercard")}>
          <FaCcMastercard /> Mastercard •••• 2314
        </button>
        <button className="card-btn amex" onClick={() => handlePaymentMethod("American Express")}>
          <FaCcAmex /> American Express •••• 2314
        </button>
        <button className="card-btn paypal" onClick={() => handlePaymentMethod("PayPal")}>
          <FaPaypal /> PayPal
        </button>
        <button className="card-btn qr" onClick={() => handlePaymentMethod("QR Code")}>
          <FaQrcode /> Pay by QR Code
        </button>
      </div>

      <div className="qr-section">
        <p>Prefer mobile? Scan QR code</p>
        <img src="/qr.jpg" alt="QR Code" className="qr-code" />
      </div>
    </div>
  );
};

export default PaymentPage;
