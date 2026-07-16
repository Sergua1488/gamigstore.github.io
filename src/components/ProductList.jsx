import React, { useEffect, useState } from "react";
import { db } from "../FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "gaming"));

        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productsData);
      } catch (error) {
        console.error("Ошибка при получении товаров:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(searchQuery),
  );

  return (
    <div className="gaming">
      <h1>Покупай и играй без компромиссов</h1>

      <input
        type="text"
        placeholder="Поиск товаров..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />

            <h2>{product.name}</h2>
            <p>{product.description}</p>

            <p style={{ color: "#66fcf1", fontWeight: "bold" }}>
              Цена: {product.price} ТГ.
            </p>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Добавить в корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
