import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const useDataContext = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};

export default useDataContext;
