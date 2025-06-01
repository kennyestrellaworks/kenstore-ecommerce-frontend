import { useState } from "react";
import useDataContext from "../hooks/useDataContext";
import { Rating } from "./Rating";
import { Link } from "react-router-dom";
import useCartContext from "../hooks/useCartContext";

export const Hero = () => {
  const { getHeroes, getSingleProduct, getCategories } = useDataContext();
  const { getCategoryName } = useCartContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(null);

  const heroes = getHeroes();
  // console.log("hereos ", heroes);

  const nextSlide = (index) => {
    setCurrentIndex(index);
  };

  const basePath = "/images/";

  return (
    <>
      <div className="hero-slider__item">
        <img
          src={basePath + heroes[currentIndex].image}
          alt={heroes[currentIndex].heroName}
          className="hero-slider__main-image"
        />
        <div className="hero__content">
          <h1 className="hero__title">
            Shop our{" "}
            <span className="hero__title-highlight">Best Sellers!</span>
          </h1>
          <div className="hero-slider__showcase grid-of-3__wrap">
            {heroes[currentIndex].showcase.map((item, index) => {
              const singleProduct = getSingleProduct(item);
              const categories = getCategories();
              const categoryName = getCategoryName(
                categories,
                singleProduct.category
              );
              // console.log("categoryName", categoryName);
              // console.log("singleProduct ", singleProduct);
              // console.log("categories", categories);
              return (
                <div key={index} className="hero-slider__showcase-item">
                  <Link
                    state={{
                      search: "/",
                      from: "home",
                      categoryName: categoryName,
                    }}
                    to={`products/${singleProduct.id}`}
                    className="hero-slider__image-link"
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <img
                      className={`hero-slider__showcase-big-image ${
                        isHovered === index ? "hero-slider__scale1-05" : ""
                      }`}
                      src={singleProduct.image}
                      alt=""
                    />
                  </Link>
                  <div className="hero-slider__showcase-item-details">
                    <div className="hero-slider__showcase-item-rating">
                      {singleProduct.rating}&nbsp;&nbsp;
                      <Rating rating={singleProduct.rating} />
                      &nbsp;&nbsp;|&nbsp;&nbsp;
                      {singleProduct.reviewsCount}
                    </div>
                    <div
                      onMouseEnter={() => setIsHovered(index)}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      <Link
                        className={`hero-slider__showcase-item-heading ${
                          isHovered === index ? "hero-slider__translatey" : ""
                        }`}
                        state={{
                          search: "/",
                          from: "home",
                          categoryName: categoryName,
                        }}
                        to={`products/${singleProduct.id}`}
                      >
                        {singleProduct.name}
                      </Link>
                    </div>
                    <div
                      onMouseEnter={() => setIsHovered(index)}
                      onMouseLeave={() => setIsHovered(null)}
                      className={`hero-slider__showcase-item-price  ${
                        isHovered === index ? "hero-slider__translatey" : ""
                      }`}
                    >
                      ${singleProduct.price}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="hero-slider__dots">
          {heroes.map((_, index) => {
            return (
              <span
                key={index}
                className={`hero-slider__dot ${
                  currentIndex === index ? "active" : ""
                }`}
                onClick={() => nextSlide(index)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
