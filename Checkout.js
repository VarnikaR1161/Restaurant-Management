import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { useNavigate, Link } from 'react-router-dom';

function Checkout() {
  const { cartItems, deleteFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [deliveryMethod, setDeliveryMethod] = useState('Delivery');
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discount, setDiscount] = useState(0);

  // Calculate costs
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = +(subtotal * 0.05).toFixed(2);
  const deliveryFee = deliveryMethod === 'Delivery' ? 50 : 0;
  const total = subtotal + tax + deliveryFee - discount;

  const validDiscounts = {
    FOOD50: 50,
    SAVE20: 20
  };

  const handleDiscount = () => {
    const code = discountCode.trim().toUpperCase();
    if (validDiscounts[code]) {
      setDiscountApplied(true);
      setDiscount(validDiscounts[code]);
    } else {
      alert('Invalid discount code');
      setDiscountApplied(false);
      setDiscount(0);
    }
  };

  const handleProceedToPayment = () => {
    navigate('/payment', { state: { total } });
  };

  return (
    <div className="checkout-container">
      <h2 className="title">Checkout</h2>

      <div className="checkout-grid">
        {/* LEFT PANEL */}
        <div className="left-panel">
          <h4>Items in Cart:</h4>
          {cartItems.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <span>
                    {item.title} × {item.quantity} - ₹{item.price * item.quantity}
                  </span>
                  <button onClick={() => deleteFromCart(item.id)}>🗑️ Delete</button>
                </li>
              ))}
            </ul>
          )}

          <h4>Choose Delivery Method:</h4>
          {['Delivery', 'Takeaway'].map((method) => (
            <label key={method} className="radio">
              <input
                type="radio"
                checked={deliveryMethod === method}
                onChange={() => setDeliveryMethod(method)}
              />
              {method === 'Delivery' ? 'Home Delivery (₹50)' : 'Takeaway (Free)'}
            </label>
          ))}

          <div className="discount-section">
            <label htmlFor="discount">Discount Code:</label>
            <div className="discount-input">
              <input
                type="text"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <button onClick={handleDiscount}>Apply</button>
            </div>
            {discountApplied && (
              <p className="success-msg">Discount of ₹{discount} applied!</p>
            )}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          <h4>Order Summary</h4>
          <ul className="summary-list">
            <li>
              <span>Subtotal:</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </li>
            <li>
              <span>Tax (5%):</span>
              <span>₹{tax.toFixed(2)}</span>
            </li>
            <li>
              <span>Delivery Fee:</span>
              <span>₹{deliveryFee.toFixed(2)}</span>
            </li>
            {discountApplied && (
              <li className="success-msg">
                <span>Discount:</span>
                <span>-₹{discount}</span>
              </li>
            )}
            <li className="total">
              <span>Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </li>
          </ul>

          <button className="next-button" onClick={handleProceedToPayment}>
            Proceed to Payment →
          </button>

          <Link
            to="/invoice"
            state={{ cartItems, subtotal, tax, deliveryFee, discount, total }}
            className="invoice-link"
          >
            View Invoice
          </Link>
        </div>
      </div>

      {/* Embedded CSS */}
      <style>{`
        .checkout-container {
          max-width: 1000px;
          margin: 50px auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .title {
          text-align: center;
          margin-bottom: 30px;
          color: #28a745;
          font-size: 32px;
        }
        .checkout-grid {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
        }
        .left-panel, .right-panel {
          flex: 1;
          min-width: 300px;
        }
        .cart-items {
          list-style: none;
          padding: 0;
          margin-bottom: 20px;
        }
        .cart-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f4f4f4;
          padding: 10px;
          border-radius: 5px;
          margin-bottom: 10px;
        }
        .cart-item button {
          background: #dc3545;
          border: none;
          color: white;
          padding: 5px 10px;
          border-radius: 5px;
          cursor: pointer;
        }
        .cart-item button:hover {
          background: #c82333;
        }
        .radio {
          display: block;
          margin-bottom: 10px;
          font-size: 16px;
        }
        .discount-section {
          margin-top: 30px;
        }
        .discount-section label {
          font-weight: bold;
        }
        .discount-input {
          display: flex;
          gap: 10px;
          margin-top: 5px;
        }
        .discount-input input {
          flex: 1;
          padding: 6px 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .discount-input button {
          padding: 6px 12px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .discount-input button:hover {
          background-color: #0056b3;
        }
        .success-msg {
          color: green;
          margin-top: 8px;
        }
        .summary-list {
          list-style: none;
          padding: 0;
        }
        .summary-list li {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #eee;
          font-size: 16px;
        }
        .summary-list .total {
          font-weight: bold;
          font-size: 18px;
        }
        .next-button {
          margin-top: 20px;
          width: 100%;
          padding: 12px;
          background-color: #28a745;
          color: white;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .next-button:hover {
          background-color: #218838;
        }
        .invoice-link {
          display: inline-block;
          margin-top: 10px;
          width: 100%;
          text-align: center;
          padding: 10px;
          background-color: #ffc107;
          color: black;
          font-weight: bold;
          border-radius: 5px;
          text-decoration: none;
        }
        .invoice-link:hover {
          background-color: #e0a800;
        }
      `}</style>
    </div>
  );
}

export default Checkout;
