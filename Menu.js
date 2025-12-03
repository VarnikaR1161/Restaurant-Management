import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

function Menu() {
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, title: "Chicken Burger", description: "Juicy chicken patty layered with fresh veggies and creamy sauce in a soft bun", price: 200, image: "cb.jpg", category: "non-veg" },
    { id: 2, title: "Grilled Chicken", description: "Tender and juicy grilled chicken seasoned with aromatic herbs and spices", price: 350, image: "gc.jpg", category: "non-veg" },
    { id: 3, title: "Pasta Delight", description: "Deliciously cooked pasta tossed in a rich and flavorful Italian sauce.", price: 270, image: "pasta.jpg", category: "veg" },
    { id: 4, title: "Fries", description: "Crispy golden fries served hot with a dash of salt and seasoning", price: 150, image: "fries.jpg", category: "veg" },
    { id: 5, title: "Veg Salad", description: "A fresh mix of crunchy vegetables tossed in a light, zesty dressing.", price: 115, image: "vegsalad.jpg", category: "veg" },
    { id: 6, title: "Steak", description: "Succulent grilled steak cooked to perfection with rich, savory flavors.", price: 450, image: "steak.jpg", category: "non-veg" },
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.title} has been added to the cart successfully!`);
  };

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="menu-container container mt-5">

      {/* Search & Category Filters */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* Category Filter Buttons */}
        <div className="btn-group">
          <button
            className={`btn ${categoryFilter === 'all' ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => setCategoryFilter('all')}
          >
            All
          </button>
          <button
            className={`btn ${categoryFilter === 'veg' ? 'btn-success' : 'btn-outline-success'}`}
            onClick={() => setCategoryFilter('veg')}
          >
            Veg
          </button>
          <button
            className={`btn ${categoryFilter === 'non-veg' ? 'btn-danger' : 'btn-outline-danger'}`}
            onClick={() => setCategoryFilter('non-veg')}
          >
            Non-Veg
          </button>
        </div>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search food..."
          className="form-control w-25"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Headings */}
      <div className="text-center mb-4">
        <h2 className="text-warning fw-bold">Food Menu</h2>
        <h1 className="fw-bold">Most Popular Items</h1>
      </div>

      {/* Items */}
      <div className="row">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div className="col-md-6 mb-4" key={item.id}>
              <div className="d-flex align-items-center border-bottom pb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-circle me-3"
                  style={{ width: 80, height: 80, objectFit: 'cover' }}
                />
                <div className="flex-grow-1">
                  <h5 className="fw-bold mb-1">{item.title}</h5>
                  <p className="text-muted fst-italic mb-0">{item.description}</p>
                  <button
                    className="btn btn-sm btn-warning mt-2"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="text-warning fw-bold ms-3">₹{item.price}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center mt-4">
            <p className="text-muted">No items match your search or filter.</p>
          </div>
        )}
      </div>

      {/* View Order Button */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000
      }}>
        <button
          className="btn btn-danger btn-lg shadow"
          onClick={() => navigate("/Checkout")}
        >
          View Order
        </button>
      </div>
    </div>
  );
}

export default Menu;
