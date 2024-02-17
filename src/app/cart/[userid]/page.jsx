"use client";
"use client";
import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      image: "product1.jpg",
      count: 1,
      size: "M",
      color: "Red",
      price: 20,
    },
    {
      id: 2,
      name: "Product 2",
      image: "product2.jpg",
      count: 2,
      size: "L",
      color: "Blue",
      price: 30,
    },
  ]);

  const handleIncrement = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].count += 1;
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].count > 1) {
      updatedCartItems[index].count -= 1;
      setCartItems(updatedCartItems);
    }
  };

  const handleDelete = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  };

  const handleBuy = () => {
    const purchaseData = {
      products: cartItems.map((item) => ({
        id: item.id,
        count: item.count,
      })),
      totalPrice: calculateTotal(),
    };

    console.log("Purchase Data:", purchaseData);
    setCartItems([]);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.map((item, index) => (
        <div key={item.id}>
          <img
            src={item.image}
            alt={item.name}
            style={{ width: "50px", height: "50px" }}
          />
          <span>{item.name}</span>
          <span>Size: {item.size}</span>
          <span>Color: {item.color}</span>
          <button onClick={() => handleDecrement(index)}>-</button>
          <span>{item.count}</span>
          <button onClick={() => handleIncrement(index)}>+</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
          <span>Total: {item.price * item.count}</span>
        </div>
      ))}
      <div>
        <h3>Total Amount: {calculateTotal()}</h3>
        <button onClick={handleBuy}>Buy</button>
      </div>
    </div>
  );
};

export default Cart;
