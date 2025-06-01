import { Link } from "react-router-dom";
import defaultImage from "../assets/images/default-image.jpg";
import useDataContext from "../hooks/useDataContext";
import { Hero } from "../components/Hero";

export const Home = () => {
  const { systemData, loading } = useDataContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  // console.log("systemData ", systemData);

  const categories = systemData?.[0]?.categories || [];

  // console.log("systemData", systemData);
  // console.log("loading", loading);
  // console.log("error", error);
  // console.log("categories", categories);

  return (
    <>
      <section className="wrapper hero">
        <div className="wrapper__1920">
          <div className="hero__slide">
            <div className="hero__container">
              <Hero />
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper home">
        <div className="wrapper__1920">
          <div className="category">
            <div className="wrapper__1920--content">
              <div className="category__container">
                <h1 className="heading__primary">category</h1>
                <p className="paragraph__primary category__paragraph">
                  Explore our curated collection of fashion categories — from
                  classic essentials to bold statement pieces. Find what fits
                  your style today!
                </p>
                <div className="category__list grid">
                  <div className="category__cards cards grid-of-3__wrap">
                    {/* Card items */}
                    {categories.map((category, i) => {
                      return (
                        <div key={i} className="cards-v1">
                          <Link
                            to={`products/?category=${category.id}`}
                            key={i}
                          >
                            <img
                              className="cards-v1__image category__image"
                              src={
                                category.image ? category.image : defaultImage
                              }
                              alt=""
                            />
                            <h2 className="cards-v1__heading category__heading">
                              {category.category}
                            </h2>
                          </Link>
                        </div>
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
