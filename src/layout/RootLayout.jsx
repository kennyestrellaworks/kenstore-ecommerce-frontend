import { NavLink, Outlet } from "react-router-dom";
import ownerLogo from "../assets/images/owner-logo.svg";
import { Footer } from "../components/Footer";
import { CartPreview } from "../components/CartPreview";
import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";

export const RootLayout = () => {
  const { cart, cartCount } = useContext(CartContext);
  const [openNavbar, setOpenNavbar] = useState(false);

  const handleOpenCloseNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  // console.log("cart", cart);

  return (
    <>
      <header className="wrapper header">
        <div className="wrapper__1920">
          <div className="fixed header__wrapper">
            <div className="fixed__content">
              <div className="header__container">
                <NavLink to="/" className="header__logo-iamge">
                  <img
                    src={ownerLogo}
                    alt="owner-logo"
                    className="header__logo-image"
                  />
                </NavLink>
                <nav
                  className={`navbar ${
                    openNavbar === false ? "" : "navbar__show"
                  }`}
                >
                  <div className="navbar__list">
                    <div className="navbar__cart">
                      {cart.length === 0 ? (
                        ""
                      ) : (
                        <div className="cart-badge">
                          <div className="cart-badge__wrapper">
                            <div className="cart-badge__content">
                              {cartCount}
                            </div>
                          </div>
                        </div>
                      )}

                      <NavLink to="cart" className="navbar__link">
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
                      </NavLink>
                      <div className="cart-preview">
                        <CartPreview cart={cart} />
                      </div>
                    </div>
                    <NavLink to="/" className="navbar__link">
                      Home
                    </NavLink>
                    <NavLink to="products" className="navbar__link">
                      Products
                    </NavLink>
                  </div>
                </nav>
                <div className="hamburger-menu">
                  <div
                    onClick={handleOpenCloseNavbar}
                    className={`hamburger-menu__open ${
                      openNavbar === true ? "hide" : ""
                    }`}
                  >
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 12L0 10L18 10V12L0 12ZM0 7L0 5L18 5V7L0 7ZM0 2L0 0L18 0V2L0 2Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div
                    className={`hamburger-menu__close ${
                      openNavbar === true ? "" : "hide"
                    }`}
                    onClick={handleOpenCloseNavbar}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.75 6.81984L17.1802 5.25L12 10.4302L6.81984 5.25L5.25 6.81984L10.4302 12L5.25 17.1802L6.81984 18.75L12 13.5698L17.1802 18.75L18.75 17.1802L13.5698 12L18.75 6.81984Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
