import { Link, useSearchParams } from "react-router-dom";
import useDataContext from "../hooks/useDataContext.js";
import { ProductCard } from "../components/ProductCard.jsx";

export const Product = () => {
  const { systemData, productsData, loading } = useDataContext();
  const [searchParams, setSearchParams] = useSearchParams();

  // console.log("searchParams ", searchParams);

  if (loading) {
    return <p>Loading...</p>;
  }

  const categories = systemData?.[0]?.categories || [];

  const categoryFilter = searchParams.get("category");

  // console.log("categoryFilter ", categoryFilter);

  const activeProducts = categoryFilter
    ? productsData.filter((product) => product.category === categoryFilter)
    : productsData;

  // console.log("systemData", systemData);
  // console.log("productsData", productsData);

  const handleCategoryChange = (key, value) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      // console.log("prevParams", prevParams);
      return prevParams;
    });
    // console.log(
    //   "searchParams handleCategoryChange",
    //   searchParams.get("category")
    // );
  };

  return (
    <>
      <section className="wrapper home">
        <div className="wrapper__1920">
          <div className="category">
            <div className="wrapper__1920--content">
              <div className="product__container">
                <h1 className="heading__primary">categories</h1>
                <div className="product__categories">
                  {categories.map((category, i) => {
                    const isActive = category.id === categoryFilter;

                    return (
                      <Link
                        key={i}
                        to={`?category=${category.id}`}
                        className={`button button__secondary ${
                          isActive ? "active" : ""
                        }`}
                        onClick={() =>
                          handleCategoryChange("category", category.id)
                        }
                      >
                        {category.category.toUpperCase()}
                      </Link>
                    );
                  })}
                  {categoryFilter ? (
                    <button
                      onClick={() => handleCategoryChange("category", null)}
                      className="button__tertiary"
                    >
                      Clear filter
                    </button>
                  ) : null}
                </div>
                <div className="product__list grid">
                  <div className="product__cards cards grid-of-4__wrap">
                    {/* Card items */}
                    {activeProducts.map((product, i) => {
                      const categoryName =
                        categories.find(
                          (category) => category.id === product.category
                        )?.category || "Unknown";

                      return (
                        <ProductCard
                          key={i}
                          product={product}
                          categoryName={categoryName}
                          categoryFilter={categoryFilter}
                          searchParams={searchParams}
                        />
                      );
                    })}
                    {/* Card items */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
