import React, { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import axios from 'axios';

function InvoicePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const invoiceRef = useRef();

  // Try to get from location.state first, else from localStorage
  const orderData = location.state || JSON.parse(localStorage.getItem("invoiceData"));

  useEffect(() => {
    if (orderData) {
      // Save order in backend on load
      const saveOrder = async () => {
        try {
          const response = await axios.post("http://localhost:8080/api/checkout", {
            customerName: "Test Customer", // You can make this dynamic
            totalAmount: orderData.total,
            paymentStatus: "PENDING",
            paymentMethod: "Cash", // Update based on your payment flow
            discountApplied: orderData.discount > 0
          });
          console.log("Order saved:", response.data);
        } catch (error) {
          console.error("Error saving order:", error);
        }
      };
      saveOrder();
    }
  }, [orderData]);

  if (!orderData) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px', color: 'red' }}>
        Order details missing.
        <br />
        <button onClick={() => navigate('/checkout')}>Go Back to Checkout</button>
      </div>
    );
  }

  const { cartItems, subtotal, tax, deliveryFee, discount, total } = orderData;

  // Function to generate PDF
  const downloadPDF = () => {
    const input = invoiceRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 190;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 10;

      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('invoice.pdf');
    });
  };

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', fontFamily: 'Arial' }}>
      <div ref={invoiceRef}>
        <h2 style={{ textAlign: 'center', color: '#28a745' }}>Invoice</h2>
        <table width="100%" border="1" cellPadding="8" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f4f4f4' }}>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>₹{item.price}</td>
                <td>₹{item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: '20px', textAlign: 'right' }}>
          <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
          <p>Tax (5%): ₹{tax.toFixed(2)}</p>
          <p>Delivery Fee: ₹{deliveryFee.toFixed(2)}</p>
          {discount > 0 && <p>Discount: -₹{discount.toFixed(2)}</p>}
          <h3>Total: ₹{total.toFixed(2)}</h3>
        </div>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button
          onClick={downloadPDF}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Download Invoice (PDF)
        </button>

        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px'
          }}
          onClick={() => navigate('/payment', { state: { amount: total } })}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default InvoicePage;
