import { Link, useLocation, useParams } from "react-router-dom";
import defaultImage from "../assets/images/default-image.jpg";
import { useEffect, useState } from "react";
import { formatPrice } from "../utils/formatPrice";
import { Rating } from "../components/Rating";
import { QuantityCounter } from "../components/QuantityCounter";
import { Button } from "../components/Button";
import useCartContext from "../hooks/useCartContext";
import useDataContext from "../hooks/useDataContext";

export const SingleProduct = () => {
  const { id } = useParams();
  const { cart, addToCart } = useCartContext();
  const { productsData, loading } = useDataContext();
  const [activeImage, setActiveImage] = useState(defaultImage);
  const [foundItem, setFoundItem] = useState({});
  const [tempStockCount, setTempStockCount] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();

  // const categoryId = location.state.category;
  const categoryName = location.state?.categoryName;

  const url =
    location.state?.from === "products"
      ? `..${location.state?.search || ""}`
      : location.state?.from === "cart"
      ? "/cart"
      : location.state?.from === "home"
      ? "/"
      : "";

  const backLinkLabel =
    location.state?.from === "products"
      ? location.state?.category === null
        ? "products"
        : `${categoryName}`
      : location.state?.from === "cart"
      ? "cart"
      : location.state?.from === "home"
      ? "home"
      : "";

  const singleProduct = productsData?.find((product) => product.id === id);

  useEffect(() => {
    if (singleProduct?.image) {
      setActiveImage(singleProduct.image);
      calculateStockCount(singleProduct, cart);
    }
  }, [singleProduct, cart]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const calculateStockCount = (singleProduct, cart) => {
    const item = cart.find((item) => item.id === singleProduct.id);
    setFoundItem(item);
    const stockCountCompute = item
      ? singleProduct?.stockCount - item.quantity
      : singleProduct?.stockCount;
    setTempStockCount(stockCountCompute);
  };

  const handleAddToCart = (singleProduct) => {
    // console.log("singleProduct ", singleProduct);
    const productAndQuantity = { ...singleProduct, quantity };
    addToCart(productAndQuantity, quantity);
    setQuantity(1);

    // Run after adding to cart
    calculateStockCount(singleProduct, [
      ...cart,
      {
        ...productAndQuantity,
        quantity: (foundItem?.quantity || 0) + quantity,
      },
    ]);
  };

  return (
    <>
      <section className="wrapper single-product">
        <div className="wrapper__1920">
          <div className="wrapper__1920--content">
            <div className="single-product__wrapper">
              <div className="single-product__button">
                <Link
                  to={url}
                  className="button button__secondary"
                  relative="path"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.8156 10.5H8.78437L12.675 6.77817C13.2328 6.19224 13.2328 5.24536 12.675 4.65942C12.1172 4.07349 11.2125 4.07349 10.65 4.65942L4.17188 10.9407C3.89062 11.2125 3.75 11.5829 3.75 11.9907V12.0094C3.75 12.4172 3.89062 12.7875 4.17188 13.0594L10.6453 19.3407C11.2078 19.9266 12.1125 19.9266 12.6703 19.3407C13.2281 18.7547 13.2281 17.8079 12.6703 17.2219L8.77969 13.5H18.8109C19.6031 13.5 20.2453 12.8297 20.2453 12C20.25 11.1563 19.6078 10.5 18.8156 10.5Z" />
                  </svg>
                  <span>
                    Back to{" "}
                    {backLinkLabel.charAt(0).toUpperCase() +
                      backLinkLabel.slice(1).toLowerCase()}
                  </span>
                </Link>
              </div>
              <div className="single-product__container grid">
                <div className="grid-of-2__wrap">
                  <div className="single-product__images">
                    <div
                      className="single-product__big-image"
                      style={
                        singleProduct.gallery.length === 0
                          ? { width: "100%" }
                          : {}
                      }
                    >
                      <img
                        className="single-product__big-image-item"
                        src={singleProduct.image ? activeImage : defaultImage}
                        alt=""
                      />
                    </div>
                    {singleProduct.gallery.length === 0 ? (
                      ""
                    ) : (
                      <div className="single-product__thumbnails">
                        {singleProduct.gallery.length > 0
                          ? singleProduct.gallery.map((thumbs, i) => {
                              const imagePath = `/images/${thumbs}.jpg`;
                              const isActive = imagePath === activeImage;

                              return (
                                <img
                                  key={i}
                                  className={`single-product__thumbnail-item ${
                                    isActive ? "active" : ""
                                  }`}
                                  src={`/images/${thumbs}.jpg`}
                                  alt=""
                                  onClick={() =>
                                    setActiveImage(`/images/${thumbs}.jpg`)
                                  }
                                />
                              );
                            })
                          : ""}
                      </div>
                    )}
                  </div>
                  <div className="single-product__details">
                    <div className="product__category-label">
                      {categoryName}
                    </div>
                    <h2 className="single-product__heading product__heading heading__secondary">
                      {singleProduct.name}
                    </h2>
                    <div className="product__rating">
                      <p className="product__rating-number">
                        {singleProduct.rating}
                      </p>
                      <div className="product__rating-stars">
                        <Rating rating={singleProduct.rating} />
                      </div>
                      <p className="product__reviews-count">
                        {singleProduct.reviewsCount} reviews
                      </p>
                    </div>
                    <div className="product__price">
                      <h1 className="product__price-heading heading__primary">
                        ${formatPrice(singleProduct.price)}
                      </h1>
                    </div>
                    <div className="product__stock">
                      <p className="product__in-stock">
                        In stock:&nbsp;{" "}
                        <span className="product__stock-count">
                          {tempStockCount}
                        </span>
                      </p>
                      {foundItem ? (
                        <p className="product__in-cart">{`${foundItem.quantity} in cart`}</p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="single-product__description">
                      {singleProduct.description}
                    </div>
                    <div className="product__share social-icons__wrapper">
                      <p>Share: </p>
                      <div className="footer__social-icon social-icons__icons">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_77_1445)">
                            <path
                              d="M20 10C20 4.47656 15.5234 0 10 0C4.47656 0 0 4.47656 0 10C0 14.6875 3.23047 18.625 7.58594 19.707V13.0547H5.52344V10H7.58594V8.68359C7.58594 5.28125 9.125 3.70312 12.4688 3.70312C13.1016 3.70312 14.1953 3.82812 14.6445 3.95312V6.71875C14.4102 6.69531 14 6.67969 13.4883 6.67969C11.8477 6.67969 11.2148 7.30078 11.2148 8.91406V10H14.4805L13.918 13.0547H11.2109V19.9258C16.1641 19.3281 20 15.1133 20 10Z"
                              fill="#3B5999"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_77_1445">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="footer__social-icon social-icons__icons">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.9441 5.92638C17.9568 6.10403 17.9568 6.28173 17.9568 6.45938C17.9568 11.8781 13.8325 18.1218 6.29441 18.1218C3.97207 18.1218 1.81473 17.4492 0 16.2817C0.329961 16.3198 0.647187 16.3325 0.989844 16.3325C2.90605 16.3325 4.67004 15.6853 6.07867 14.5812C4.27664 14.5431 2.76648 13.3629 2.24617 11.7386C2.5 11.7766 2.75379 11.802 3.02031 11.802C3.38832 11.802 3.75637 11.7512 4.09898 11.6624C2.22082 11.2817 0.812148 9.63196 0.812148 7.63958V7.58884C1.35781 7.89341 1.99238 8.08376 2.66492 8.10911C1.56086 7.37306 0.837539 6.11673 0.837539 4.6954C0.837539 3.93399 1.04055 3.23603 1.3959 2.62688C3.41367 5.11419 6.44668 6.73853 9.84766 6.91622C9.78422 6.61165 9.74613 6.29442 9.74613 5.97716C9.74613 3.71825 11.5736 1.87817 13.8451 1.87817C15.0253 1.87817 16.0913 2.3731 16.84 3.17259C17.7664 2.99493 18.6547 2.65228 19.4416 2.18274C19.137 3.13454 18.4898 3.93403 17.6395 4.44161C18.4644 4.35282 19.2639 4.12435 19.9999 3.80712C19.4416 4.61927 18.7436 5.34259 17.9441 5.92638Z"
                            fill="#10C2FF"
                          />
                        </svg>
                      </div>
                      <div className="footer__social-icon social-icons__icons">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_77_1447)">
                            <path
                              d="M19.6875 10C19.6875 15.3516 15.3516 19.6875 10 19.6875C9 19.6875 8.03906 19.5352 7.13281 19.2539C7.52734 18.6094 8.11719 17.5547 8.33594 16.7148C8.45312 16.2617 8.9375 14.4102 8.9375 14.4102C9.25391 15.0117 10.1758 15.5234 11.1562 15.5234C14.0781 15.5234 16.1836 12.8359 16.1836 9.49609C16.1836 6.29688 13.5703 3.90234 10.2109 3.90234C6.03125 3.90234 3.80859 6.70703 3.80859 9.76562C3.80859 11.1875 4.56641 12.957 5.77344 13.5195C5.95703 13.6055 6.05469 13.5664 6.09766 13.3906C6.12891 13.2578 6.29297 12.5977 6.36719 12.293C6.39062 12.1953 6.37891 12.1094 6.30078 12.0156C5.90625 11.5273 5.58594 10.6367 5.58594 9.80469C5.58594 7.66797 7.20312 5.60156 9.96094 5.60156C12.3398 5.60156 14.0078 7.22266 14.0078 9.54297C14.0078 12.1641 12.6836 13.9805 10.9609 13.9805C10.0117 13.9805 9.29688 13.1953 9.52734 12.2305C9.80078 11.0781 10.3281 9.83594 10.3281 9.00391C10.3281 8.26172 9.92969 7.64062 9.10156 7.64062C8.12891 7.64062 7.34766 8.64453 7.34766 9.99219C7.34766 10.8516 7.63672 11.4297 7.63672 11.4297C7.63672 11.4297 6.67969 15.4844 6.50391 16.2422C6.30859 17.0781 6.38672 18.2578 6.46875 19.0234C2.86719 17.6133 0.3125 14.1055 0.3125 10C0.3125 4.64844 4.64844 0.3125 10 0.3125C15.3516 0.3125 19.6875 4.64844 19.6875 10Z"
                              fill="#DE0217"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_77_1447">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="single-product__footer">
                      <div className="single-product__quantity">
                        <QuantityCounter
                          stockCount={singleProduct.stockCount}
                          quantity={quantity}
                          setQuantity={setQuantity}
                          tempStockCount={tempStockCount}
                          disableButtons={tempStockCount === 0}
                        />
                      </div>
                      <div className="single-product__add-to-cart">
                        <Button
                          type={"button"}
                          className={
                            "button button__primary single-product__add-to-cart-button"
                          }
                          hasIcon={
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8.25586 21C9.08429 21 9.75586 20.3284 9.75586 19.5C9.75586 18.6716 9.08429 18 8.25586 18C7.42743 18 6.75586 18.6716 6.75586 19.5C6.75586 20.3284 7.42743 21 8.25586 21Z" />
                              <path d="M18.7441 21C19.5726 21 20.2441 20.3284 20.2441 19.5C20.2441 18.6716 19.5726 18 18.7441 18C17.9157 18 17.2441 18.6716 17.2441 19.5C17.2441 20.3284 17.9157 21 18.7441 21Z" />
                              <path d="M19.4997 17.256H7.49972C7.13972 17.256 6.82772 16.992 6.75572 16.632L4.61972 4.49996H2.25572C1.83572 4.49996 1.51172 4.16396 1.51172 3.75596C1.51172 3.34796 1.84772 3.01196 2.25572 3.01196H5.25572C5.61572 3.01196 5.92772 3.27596 5.99972 3.63596L8.13572 15.768H19.5117C19.9317 15.768 20.2557 16.104 20.2557 16.512C20.2557 16.92 19.9197 17.256 19.4997 17.256Z" />
                              <path d="M19.1879 14.256H7.49986C7.07986 14.256 6.75586 13.92 6.75586 13.512C6.75586 13.104 7.09186 12.768 7.49986 12.768H18.8879L20.0879 6.76803H5.99986C5.57986 6.76803 5.25586 6.43203 5.25586 6.02403C5.25586 5.61603 5.59186 5.28003 5.99986 5.28003H20.5439C20.6159 5.28003 20.6879 5.29203 20.7599 5.30403C21.0599 5.36403 21.3119 5.53203 21.4799 5.78403C21.6479 6.03603 21.7079 6.33603 21.6479 6.62403L20.3039 13.368C20.1959 13.872 19.7279 14.256 19.1879 14.256Z" />
                            </svg>
                          }
                          buttonContent={
                            tempStockCount > 0 ? "Add to Cart" : "Out of Stock"
                          }
                          disabled={tempStockCount > 0 ? false : true}
                          onClick={() => handleAddToCart(singleProduct)}
                        />
                      </div>
                    </div>
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
