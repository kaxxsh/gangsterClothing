"use client";

import React, { useState, useEffect } from "react";
import { BASE_URL } from "@/config";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = () => {
    fetch(BASE_URL + "/api/cart", {
      cache: "no-store",
      credentials: "include",
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setCartItems(res))
      .catch((error) => {
        console.error("Error fetching cart data:", error);
      });
  };

  const updateCartItem = async (id, count) => {
    try {
      await fetch(BASE_URL + "/api/cart", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ id, count }),
      });

      fetchCartData();
    } catch (error) {
      console.error("Error updating cart item:", error);
    }
  };

  const handleIncrement = (id, count) => {
    const updatedCount = count + 1;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: updatedCount } : item
      )
    );
    updateCartItem(id, updatedCount);
  };

  const handleDecrement = (id, count) => {
    if (count > 1) {
      const updatedCount = count - 1;
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, count: updatedCount } : item
        )
      );
      updateCartItem(id, updatedCount);
    }
  };

  const handleDelete = async (id) => {
    await fetch(BASE_URL + "/api/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ id }),
    });

    fetchCartData();
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  };

  const handleBuy = async () => {
    console.log("Buy button clicked");

    await fetch(BASE_URL + "/api/cart/clear", {
      method: "POST",
      credentials: "include",
    });

    fetchCartData();
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "50px", height: "50px" }}
              />
              <span>{item.name}</span>
              <span>Size: {item.size}</span>
              <span>Color: {item.color}</span>
              <button onClick={() => handleDecrement(item.id, item.count)}>
                -
              </button>
              <span>{item.count}</span>
              <button onClick={() => handleIncrement(item.id, item.count)}>
                +
              </button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
              <span>Total: {item.price * item.count}</span>
            </div>
          ))}
          <div>
            <h3>Total Amount: {calculateTotal()}</h3>
            <button onClick={handleBuy}>Buy</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;