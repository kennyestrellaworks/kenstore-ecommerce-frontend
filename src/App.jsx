import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./sass/main.scss";
import { Home } from "./pages/Home";
import { RootLayout } from "./layout/RootLayout";
import { Product } from "./pages/Product";
import { SingleProduct } from "./pages/SingleProduct";
import { Cart } from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import { DataProvider } from "./context/DataContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Product />} />
      <Route path="products/:id" element={<SingleProduct />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

export const App = () => {
  return (
    <DataProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </DataProvider>
  );
};
