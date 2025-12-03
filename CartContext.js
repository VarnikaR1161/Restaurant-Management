// CartContext.js
import React, { createContext, useState } from "react";

// Create the context
export const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === item.id);
      if (existing) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove an item from the cart completely
  const deleteFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Optional: decrease quantity by 1 or remove if quantity = 1
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, deleteFromCart, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
