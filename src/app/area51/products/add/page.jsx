"use client";

import { BASE_URL } from "@/config";
import styles from "@/styles/area51.module.scss";
import { colorNameToCode } from "color-name-to-code";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [images, setImages] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    compare: "",
    category: "",
    stock: "",
    status: "active",
  });

  useEffect(() => {
    if (id) {
      fetch(BASE_URL + "/api/area51/product/" + id)
        .then((res) => res.json())
        .then((data) => {
          setColors(data.colors);
          setSizes(data.sizes);
          setImages(data.media);
          setForm(data);
        });
    }
  }, [id]);

  const handleSubmit = async () => {
    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }
    for (let i = 0; i < images.length; i++) {
      formData.append("files", images[i]);
    }
    formData.append("colors", JSON.stringify(colors));
    formData.append("sizes", JSON.stringify(sizes));
    const response = fetch(BASE_URL + "/api/area51/product", {
      cache: "no-store",
      credentials: "include",
      method: "POST",
      body: formData,
    });
    toast.promise(response, {
      pending: "Adding product...",
      success: "Product Added!",
      error: "Error adding product!",
    });
    const data = await response.then((response) => response.json());
    console.log(data);
  };

  // error handling wip
  return (
    <div className={styles.products}>
      <div className={styles.top}>
        <span>
          <Link href="/area51/products">{"<"}-&nbsp;</Link>
        </span>
        Add Product
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.text}>
            <label htmlFor="title">Title</label>
            <input
              value={form.title}
              aria-autocomplete="list"
              type="text"
              name="title"
              placeholder="Enter title"
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <label htmlFor="description">Description</label>
            <textarea
              value={form.description}
              spellCheck="false"
              type="text"
              name="description"
              placeholder="Enter description"
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
          </div>
          <div className={styles.media}>
            <label htmlFor="media">Media</label>
            <div className={styles.upload}>
              {images.length > 0 && (
                <div className={styles["uploaded-container"]}>
                  {images.map((item) => {
                    return (
                      <img
                        onClick={() => setImages(images.filter((img) => img !== item))}
                        className={styles.uploadedimg}
                        src={typeof item === "string" ? item : URL.createObjectURL(item)}
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
            <input
              value={form.price}
              aria-autocomplete="list"
              type="number"
              name="price"
              placeholder="Enter price"
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />
            <label htmlFor="compare">Compare-at price</label>
            <input
              value={form.compare}
              aria-autocomplete="list"
              type="number"
              name="compare"
              placeholder="Enter compare-at price"
              onChange={(e) => setForm({ ...form, compare: e.target.value })}
            />
            <div className={styles.tooltip}>
              To display a markdown, enter a value higher than your price. Often shown with a
              strikethrough.
            </div>
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
            {sizes.length > 0 && (
              <div className={styles.tooltip}>Click on the chips to remove them</div>
            )}
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
            {colors.length > 0 && (
              <div className={styles.tooltip}>Click on the chips to remove them</div>
            )}
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
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.category}>
            <label htmlFor="category">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option value="">Select a category</option>
              <option value="tshirt">T-Shirts</option>
              <option value="shirt">Shirts</option>
              <option value="coord">Co-ords</option>
              <option value="jacket">Jackets</option>
              <option value="bottom">Bottoms</option>
              <option value="accessory">Accessories</option>
            </select>
          </div>
          <div className={styles.status}>
            <label htmlFor="status">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
            <label htmlFor="stock">Stock</label>
            <input
              aria-autocomplete="list"
              type="number"
              name="stock"
              onChange={(e) => setForm({ ...form, stock: e.target.value })}
            />
            <div className={styles.checkbox}>
              <input type="checkbox" name="outofstock" />
              <label htmlFor="outofstock">Continue selling when out of stock</label>
            </div>
            <div className={styles.tooltip}>
              Customers can still order the product, but you can complete sales when inventory is
              available.
            </div>
          </div>
          <div className={styles.submit}>
            Make sure you recheck all the details before adding the product to the store
            <div className={styles.tooltip}>
              Please note that the item details can be changed at any time through Area 51.
            </div>
            <div className={styles["button-container"]}>
              <button>Preview</button>
              <button onClick={handleSubmit}>Add Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
