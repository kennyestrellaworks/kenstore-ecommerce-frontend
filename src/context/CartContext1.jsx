import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);

  // const getCart = () => {
  //   return JSON.parse(localStorage.getItem("cart")) || [];
  // };

  useEffect(() => {
    const storedCart = getCart();
    setCart(storedCart);

    const totalCount = storedCart.reduce(
      (sum, item) => sum + (item.quantity || 1),
      0
    );
    setCartCount(totalCount);
  }, []);

  const addToCart = (productToAdd, quantity) => {
    const currentCart = getCart();
    const itemIndex = currentCart.findIndex(
      (item) => item.id === productToAdd.id
    );

    if (itemIndex !== -1) {
      currentCart[itemIndex].quantity += quantity;
    } else {
      currentCart.push({ ...productToAdd, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(currentCart));
    setCart(currentCart);

    const totalCount = currentCart.reduce(
      (sum, item) => sum + (item.quantity || 1),
      0
    );
    setCartCount(totalCount);
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);

    const totalCount = updatedCart.reduce(
      (sum, item) => sum + (item.quantity || 1),
      0
    );
    setCartCount(totalCount);
  };

  // const updateCartItemQuantity = (itemId, newQuantity) => {
  //   const updatedCart = cart.map((item) =>
  //     item.id === itemId ? { ...item, quantity: newQuantity } : item
  //   );

  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   setCart(updatedCart);

  //   const totalCount = updatedCart.reduce(
  //     (sum, item) => sum + (item.quantity || 1),
  //     0
  //   );
  //   setCartCount(totalCount);
  // };

  // const updateCartItemQuantity = (itemId, newQuantity) => {
  //   const currentCart = getCart();
  //   const updatedCart = currentCart.map((item) =>
  //     item.id === itemId ? { ...item, quantity: newQuantity } : item
  //   );

  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   setCart(updatedCart);

  //   const totalCount = updatedCart.reduce(
  //     (sum, item) => sum + (item.quantity || 1),
  //     0
  //   );
  //   setCartCount(totalCount);
  // };

  // console.log("cartCount", cartCount);

  return (
    <CartContext.Provider
      value={{ cart, cartCount, addToCart, getCart, updateCartItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
