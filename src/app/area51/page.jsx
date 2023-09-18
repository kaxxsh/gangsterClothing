"use client";

import { useState } from "react";

const Area51 = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    description: "",
    image: "",
    category: "",
  });
  return (
    <div>
      <h1>add new product</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch("/api/area51", {
            method: "POST",
            body: JSON.stringify(product),
          });
        }}
      >
        <input
          type="text"
          placeholder="name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <input
          type="number"
          placeholder="quantity"
          value={product.quantity}
          onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
        />
        <input
          type="text"
          placeholder="description"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="image"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
        />
        <input
          type="text"
          placeholder="category"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Area51;
