import Banner from "./Banner.jsx";
import MainBar from "./MainBar.jsx";
import CategoriesBar from "./CategoriesBar.jsx";
import HomePage from "../Pages/HomePage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import ShoppingCart from "./ShoppingCart.jsx";
import Checkout from "../Pages/CheckoutPage.jsx";
import ProductsPage from "../Pages/ProductsPage.jsx";

export const cartContext = React.createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState({});
  const [checkingOut, setCheckingOut] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          "https://671797aeb910c6a6e029066e.mockapi.io/api/ecommerce/products"
        );
        if (!res.ok) {
          throw new Error("couldn't get the products");
        }
        const fetchedData = await res.json();
        setData(fetchedData);

        if (data.Response === "False") {
          throw new Error("product not found");
        }
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const [cartItems, setCartItems] = useState([]);
  function handleItemIncrease(id) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  }

  const colorCategories = [
    { name: "Grey", hex: "#8c8c8c" },
    { name: "Black", hex: "#3b3b3b" },
    { name: "White", hex: "#f5f4f0" },
    { name: "Blue", hex: "#49607c" },
    { name: "Beige", hex: "#b9afa1" },
    { name: "Red", hex: "#b14754" },
    { name: "Green", hex: "#69715e" },
    { name: "Brown", hex: "#bd9474" },
    { name: "Yellow", hex: "#ead99a" },
  ];

  const [cartIconNumber, setCartIconNumber] = useState(cartItems.length);

  useEffect(() => {
    setCartIconNumber(cartItems.reduce((acc, item) => acc + item.count, 0));
  }, [cartItems]);

  const [totalPrice, setTotalPrice] = useState(0);

  function handleItemDecrease(id) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.count !== 0
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  }
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleOpenCart() {
    setIsCartOpen(true);
  }
  function handleCloseCart() {
    setIsCartOpen(false);
  }

  function handleRemoveCartItem(removedItemId) {
    setCartItems((prev) => prev.filter((item) => item.id !== removedItemId));
  }

  function handleAddToCart(addedItemId) {
    handleOpenCart();
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === addedItemId);
      if (existingItem) {
        return prev.map((item) =>
          item.id === addedItemId ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prev, { id: addedItemId, count: 1 }];
    });
  }

  return (
    <cartContext.Provider
      value={{
        cartItems,
        handleAddToCart,
        handleRemoveCartItem,
        totalPrice,
        setTotalPrice,
        cartIconNumber,
        setCartIconNumber,
        handleCloseCart,
        setCheckingOut,
      }}
    >
      <Router>
        {isCartOpen && (
          <ShoppingCart
            data={data}
            onOpenCart={handleOpenCart}
            onCloseCart={handleCloseCart}
            onItemIncrease={handleItemIncrease}
            onItemDecrease={handleItemDecrease}
          />
        )}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <MainBar onOpenCart={handleOpenCart} />
                <CategoriesBar />
                <HomePage isCartOpen={isCartOpen} />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <Banner />
                <MainBar onOpenCart={handleOpenCart} />
                <ProductsPage
                  onItemIncrease={handleItemIncrease}
                  data={data}
                  onOpenCart={handleOpenCart}
                  onCloseCart={handleCloseCart}
                  isCartOpen={isCartOpen}
                  onItemDecrease={handleItemDecrease}
                  colorCategories={colorCategories}
                  isLoading={isLoading}
                />
              </>
            }
          />
          <Route
            path="/Checkout"
            element={
              <Checkout
                data={data}
                onItemIncrease={handleItemIncrease}
                onCloseCart={handleCloseCart}
                onItemDecrease={handleItemDecrease}
              />
            }
          />
        </Routes>
      </Router>
    </cartContext.Provider>
  );
}

export default App;
