import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);

    const totalCount = storedCart.reduce(
      (sum, item) => sum + (item.quantity || 1),
      0
    );
    setCartCount(totalCount);
  }, []);

  const addToCart = (productToAdd, quantity) => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
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

  // const getCategoryName = (categoryId, product)

  // Matching singleProduct.category to categories

  const getCategoryName = (categories, singleProductCategory) => {
    const matchedCategory = categories.find(
      (category) => category.id === singleProductCategory
    );
    return matchedCategory ? matchedCategory.category : "Unknown";
  };

  const updateQuantity = (id, delta) => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updated = currentCart.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        if (newQuantity < 1 || newQuantity > item.stockCount) {
          addToCart(item, newQuantity);
          return item;
        }
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCart(updated);

    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const updateCountCount = (cart) => {
    const totalCount = cart.reduce(
      (sum, item) => sum + (item.quantity || 1),
      0
    );
    setCartCount(totalCount);
  };

  const deleteItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const deleteAll = () => {
    localStorage.removeItem("cart");
    setCart([]);
    setCartCount(0);
  };

  // console.log("cartCount", cartCount);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        updateQuantity,
        updateCountCount,
        deleteItem,
        deleteAll,
        getCategoryName,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
