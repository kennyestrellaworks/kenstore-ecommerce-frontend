import useCartContext from "../hooks/useCartContext";
import defaultImage from "../assets/images/default-image.jpg";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { formatPrice } from "../utils/formatPrice";
import { Link } from "react-router-dom";
import { CartEmpty } from "../components/CartEmpty";
import useDataContext from "../hooks/useDataContext";

export const Cart = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const {
    cart,
    updateQuantity,
    updateCountCount,
    deleteItem,
    deleteAll,
    getCategoryName,
  } = useCartContext();
  const { systemData, getCategories } = useDataContext();

  useEffect(() => {
    const sumQuantity = cart.reduce((accu, curr) => accu + curr.quantity, 0);
    updateCountCount(cart);
    const sumTotalPrice = cart.reduce(
      (accu, curr) => accu + curr.price * curr.quantity,
      0
    );

    setTotalQuantity(sumQuantity);
    setGrandTotal(sumTotalPrice);
  }, [cart]);

  return (
    <>
      <section className="wrapper cart">
        <div className="wrapper__1920">
          <div className="wrapper__1920--content">
            <div className="cart__wrapper">
              <div className="cart__container">
                {cart.length > 0 ? (
                  <>
                    <div className="cart-header">
                      <button
                        onClick={() => deleteAll()}
                        className="button__tertiary"
                      >
                        Delete All
                      </button>

                      <div className="cart-header__grand-total-and-button">
                        <div className="cart-header__items-and-grand-total">
                          <div className="cart-header__all-total-label">
                            <h3 className="heading__tertiary">{`All Total (${totalQuantity} items)`}</h3>
                          </div>
                          <div className="cart-header__grand-total-price">
                            <h1 className="heading__primary">
                              ${formatPrice(grandTotal)}
                            </h1>
                          </div>
                        </div>
                        <div className="cart-header__proceed-to-checkout">
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
                            buttonContent={"Proceed to Checkout"}
                          />
                        </div>
                      </div>
                    </div>
                    {cart.map((item, i) => {
                      const categories = getCategories();
                      const categoryName = getCategoryName(
                        categories,
                        item.category
                      );

                      return (
                        <div key={i} className="cart-item">
                          <div className="cart-item__wrapper">
                            <Link
                              state={{
                                search: "/cart",
                                from: "cart",
                                categoryName: categoryName,
                              }}
                              className="cart-item__image-link"
                              to={`../products/${item.id}`}
                            >
                              <img
                                className="cart-item__image"
                                src={item.image ? item.image : defaultImage}
                                alt=""
                              />
                            </Link>
                            <div className="cart-item__details">
                              <div className="cart-item__details-group-1">
                                <h2 className="cart-item__title heading__secondary">
                                  <Link
                                    state={{
                                      search: "/cart",
                                      from: "cart",
                                      categoryName: categoryName,
                                    }}
                                    to={`../products/${item.id}`}
                                  >
                                    {item.name}
                                  </Link>
                                  <p className="cart-item__stockCount">
                                    In stock: {item.stockCount - item.quantity}
                                  </p>
                                </h2>
                                <div
                                  onClick={() => deleteItem(item.id)}
                                  className="cart-item__delete-button"
                                >
                                  <svg
                                    width="21"
                                    height="24"
                                    viewBox="0 0 21 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_149_760)">
                                      <path d="M20.25 1.50001H14.625L14.1844 0.623446C14.091 0.436046 13.9473 0.27841 13.7692 0.16827C13.5912 0.0581305 13.3859 -0.000141936 13.1766 8.21846e-06H7.81875C7.60987 -0.000794775 7.40498 0.0572604 7.22756 0.167522C7.05015 0.277784 6.90739 0.435793 6.81562 0.623446L6.375 1.50001H0.75C0.551088 1.50001 0.360322 1.57903 0.21967 1.71968C0.0790176 1.86033 0 2.0511 0 2.25001L0 3.75001C0 3.94892 0.0790176 4.13969 0.21967 4.28034C0.360322 4.42099 0.551088 4.50001 0.75 4.50001H20.25C20.4489 4.50001 20.6397 4.42099 20.7803 4.28034C20.921 4.13969 21 3.94892 21 3.75001V2.25001C21 2.0511 20.921 1.86033 20.7803 1.71968C20.6397 1.57903 20.4489 1.50001 20.25 1.50001ZM2.49375 21.8906C2.52952 22.4619 2.78164 22.998 3.19878 23.3899C3.61591 23.7817 4.16672 23.9999 4.73906 24H16.2609C16.8333 23.9999 17.3841 23.7817 17.8012 23.3899C18.2184 22.998 18.4705 22.4619 18.5062 21.8906L19.5 6.00001H1.5L2.49375 21.8906Z" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_149_760">
                                        <rect
                                          width="21"
                                          height="24"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                              </div>
                              <div className="cart-item__details-group-2">
                                <div className="cart-item__controls">
                                  <div className="cart-item__controls-group-1">
                                    <p className="cart-item__controls-label">
                                      Unit Price
                                    </p>
                                    <div className="cart-item__unit-price">
                                      <h1 className="cart-item__price-heading">
                                        ${formatPrice(item.price)}
                                      </h1>
                                    </div>
                                  </div>

                                  <div className="cart-item__controls-group-2">
                                    <p className="cart-item__controls-label">
                                      Total Price
                                    </p>
                                    <div className="cart-item__quantity">
                                      <div className="single-product__quantity">
                                        <div className="single-product__quantity">
                                          <div className="quantity-counter">
                                            <button
                                              onClick={() =>
                                                updateQuantity(item.id, -1)
                                              }
                                              className="quantity-btn"
                                              disabled={
                                                item.quantity === 1
                                                  ? true
                                                  : false
                                              }
                                            >
                                              <svg
                                                width="30"
                                                height="30"
                                                viewBox="0 0 30 30"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path d="M5.625 1.875C3.55664 1.875 1.875 3.55664 1.875 5.625V24.375C1.875 26.4434 3.55664 28.125 5.625 28.125H24.375C26.4434 28.125 28.125 26.4434 28.125 24.375V5.625C28.125 3.55664 26.4434 1.875 24.375 1.875H5.625ZM10.7812 13.5938H19.2188C19.998 13.5938 20.625 14.2207 20.625 15C20.625 15.7793 19.998 16.4062 19.2188 16.4062H10.7812C10.002 16.4062 9.375 15.7793 9.375 15C9.375 14.2207 10.002 13.5938 10.7812 13.5938Z" />
                                              </svg>
                                            </button>
                                            <span className="quantity-number">
                                              {item.quantity}
                                            </span>
                                            <button
                                              onClick={() =>
                                                updateQuantity(item.id, 1)
                                              }
                                              className="quantity-btn"
                                              disabled={
                                                item.stockCount ===
                                                item.quantity
                                                  ? true
                                                  : false
                                              }
                                            >
                                              <svg
                                                width="30"
                                                height="30"
                                                viewBox="0 0 30 30"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="quantity-btn__svg"
                                              >
                                                <path d="M25.3125 1.875H4.6875C3.13477 1.875 1.875 3.13477 1.875 4.6875V25.3125C1.875 26.8652 3.13477 28.125 4.6875 28.125H25.3125C26.8652 28.125 28.125 26.8652 28.125 25.3125V4.6875C28.125 3.13477 26.8652 1.875 25.3125 1.875ZM23.4375 16.6406C23.4375 17.0273 23.1211 17.3438 22.7344 17.3438H17.3438V22.7344C17.3438 23.1211 17.0273 23.4375 16.6406 23.4375H13.3594C12.9727 23.4375 12.6562 23.1211 12.6562 22.7344V17.3438H7.26562C6.87891 17.3438 6.5625 17.0273 6.5625 16.6406V13.3594C6.5625 12.9727 6.87891 12.6562 7.26562 12.6562H12.6562V7.26562C12.6562 6.87891 12.9727 6.5625 13.3594 6.5625H16.6406C17.0273 6.5625 17.3438 6.87891 17.3438 7.26562V12.6562H22.7344C23.1211 12.6562 23.4375 12.9727 23.4375 13.3594V16.6406Z" />
                                              </svg>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="cart-item__controls-group-3">
                                    <p className="cart-item__controls-label">
                                      Total Price
                                    </p>
                                    <div className="cart-item__total-price">
                                      <h1 className="cart-item__price-heading">
                                        $
                                        {formatPrice(
                                          item.price * item.quantity
                                        )}
                                      </h1>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cart-item__details-group-3">
                                <div
                                  onClick={() => deleteItem(item.id)}
                                  className="cart-item__delete-button"
                                >
                                  <svg
                                    width="21"
                                    height="24"
                                    viewBox="0 0 21 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_149_760)">
                                      <path d="M20.25 1.50001H14.625L14.1844 0.623446C14.091 0.436046 13.9473 0.27841 13.7692 0.16827C13.5912 0.0581305 13.3859 -0.000141936 13.1766 8.21846e-06H7.81875C7.60987 -0.000794775 7.40498 0.0572604 7.22756 0.167522C7.05015 0.277784 6.90739 0.435793 6.81562 0.623446L6.375 1.50001H0.75C0.551088 1.50001 0.360322 1.57903 0.21967 1.71968C0.0790176 1.86033 0 2.0511 0 2.25001L0 3.75001C0 3.94892 0.0790176 4.13969 0.21967 4.28034C0.360322 4.42099 0.551088 4.50001 0.75 4.50001H20.25C20.4489 4.50001 20.6397 4.42099 20.7803 4.28034C20.921 4.13969 21 3.94892 21 3.75001V2.25001C21 2.0511 20.921 1.86033 20.7803 1.71968C20.6397 1.57903 20.4489 1.50001 20.25 1.50001ZM2.49375 21.8906C2.52952 22.4619 2.78164 22.998 3.19878 23.3899C3.61591 23.7817 4.16672 23.9999 4.73906 24H16.2609C16.8333 23.9999 17.3841 23.7817 17.8012 23.3899C18.2184 22.998 18.4705 22.4619 18.5062 21.8906L19.5 6.00001H1.5L2.49375 21.8906Z" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_149_760">
                                        <rect
                                          width="21"
                                          height="24"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <CartEmpty />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
