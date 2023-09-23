"use client";

import styles from "@/styles/area51.module.scss";
import { colorNameToCode } from "color-name-to-code";
import { useState } from "react";

const page = () => {
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [images, setImages] = useState([]);

  return (
    <div className={styles.products}>
      <div className={styles.top}> {"<"}- Add Product</div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.text}>
            <label htmlFor="title">Title</label>
            <input aria-autocomplete="list" type="text" name="title" />
            <label htmlFor="description">Description</label>
            <textarea type="text" name="description" />
          </div>
          <div className={styles.media}>
            <label htmlFor="media">Media</label>
            <div className={styles.upload}>
              {images.length > 0 && (
                <div className={styles["uploaded-container"]}>
                  {images.map((item) => {
                    return (
                      <img
                        className={styles.uploadedimg}
                        src={URL.createObjectURL(item)}
                        alt="uploaded image"
                        key={item.name}
                      />
                    );
                  })}
                </div>
              )}
              <button>
                <label
                  style={{
                    cursor: "pointer",
                  }}
                  htmlFor="img"
                >
                  Upload Image
                </label>
              </button>
              <input
                hidden
                type="file"
                name="img"
                id="img"
                accept="image/png, image/jpeg, image/webp"
                onChange={(e) => setImages([...images, e.target.files[0]])}
              />
              Accepts png, jpeg and webp.
            </div>
          </div>
          <div className={styles.price}>
            <label htmlFor="price">Price</label>
            <input aria-autocomplete="list" type="number" name="price" />
            <label htmlFor="compare">Compare-at price</label>
            <input aria-autocomplete="list" type="number" name="compare" />
          </div>
          <div className={styles.variant}>
            <label htmlFor="size">Size</label>
            <form
              className={styles["size-container"]}
              onSubmit={(e) => {
                e.preventDefault();
                const newSize = e.target.size.value;
                if (!sizes.includes(newSize) && newSize) {
                  setSizes([...sizes, newSize]);
                }
                e.target.size.value = null;
              }}
            >
              <input aria-autocomplete="list" type="text" name="size" />
              <button type="submit">Add</button>
            </form>
            <div className={styles["chip-container"]}>
              {sizes.map((item) => {
                return (
                  <div
                    className={styles.chip}
                    key={item}
                    title="remove item"
                    onClick={() => setSizes(sizes.filter((i) => i !== item))}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            {sizes.length > 0 && (
              <div className={styles.chipinfo}>Click on the chips to remove them</div>
            )}
            <label htmlFor="color">Color</label>
            <form
              className={styles["color-container"]}
              onSubmit={(e) => {
                e.preventDefault();
                const newColor = e.target.color.value;
                if (!colors.includes(newColor) && newColor) {
                  setColors([...colors, newColor]);
                }
                e.target.color.value = null;
              }}
            >
              <input aria-autocomplete="list" type="text" name="color" />
              <button type="submit">Add</button>
            </form>
            <div className={styles["chip-container"]}>
              {colors.map((item) => {
                return (
                  <div
                    className={styles.chip}
                    key={item}
                    style={{
                      backgroundColor: colorNameToCode(item, { format: "rgb", alpha: 0.1 }),
                    }}
                    title="remove item"
                    onClick={() => setColors(colors.filter((i) => i !== item))}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            {colors.length > 0 && (
              <div className={styles.chipinfo}>Click on the chips to remove them</div>
            )}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.status}>
            <label htmlFor="status">Status</label>
            <select name="status">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <label htmlFor="stock">Stock</label>
            <input aria-autocomplete="list" type="number" name="stock" />
            <div className={styles.checkbox}>
              <input type="checkbox" name="outofstock" />
              <label htmlFor="outofstock">Continue selling when out of stock</label>
            </div>
          </div>
          <div className={styles.category}>
            <label htmlFor="category">Category</label>
            <select name="category">
              <option value="tshirt">T-Shirts</option>
              <option value="shirt">Shirts</option>
              <option value="coord">Co-ords</option>
              <option value="jacket">Jackets</option>
              <option value="bottom">Bottoms</option>
              <option value="accessory">Accessories</option>
            </select>
          </div>
          <div className={styles.submit}>
            Make sure you recheck all the details before adding the product to the store
            <div className={styles["button-container"]}>
              <button>Preview</button>
              <button>Add Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
