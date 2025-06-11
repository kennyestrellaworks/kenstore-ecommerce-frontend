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
import { Error } from "./components/Error";
import { NotFound } from "./components/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      <Route index element={<Home />} errorElement={<Error />} />
      <Route path="products" element={<Product />} errorElement={<Error />} />
      <Route
        path="products/:id"
        element={<SingleProduct />}
        errorElement={<Error />}
      />
      <Route path="cart" element={<Cart />} errorElement={<Error />} />
      <Route path="*" element={<NotFound />} />
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
