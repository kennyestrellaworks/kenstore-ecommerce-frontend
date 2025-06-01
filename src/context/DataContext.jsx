import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [systemData, setSystemData] = useState(null);
  const [productsData, setProductsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [systemRes, productsRes] = await Promise.all([
          fetch("http://localhost:9600/system"),
          fetch("http://localhost:9600/products"),
        ]);

        if (!systemRes.ok || !productsRes.ok) {
          throw new Error("Failed to fetch data!");
        }

        const systemData = await systemRes.json();
        const productsData = await productsRes.json();

        setSystemData(systemData);
        setProductsData(productsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getSingleProduct = (id) => {
    return productsData.find((item) => item.id === id);
  };

  const getCategories = () => {
    return systemData?.[0]?.categories || [];
  };

  const getHeroes = () => {
    return systemData?.[0]?.heroes || [];
  };

  return (
    <DataContext.Provider
      value={{
        systemData,
        productsData,
        loading,
        getCategories,
        getHeroes,
        getSingleProduct,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
