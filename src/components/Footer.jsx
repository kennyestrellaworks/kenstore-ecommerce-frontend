import { NavLink } from "react-router-dom";
import ownerLogov2 from "../assets/images/owner-logo-v2.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className="wrapper footer">
        <div className="wrapper__1920">
          <div className="wrapper__1920--content">
            <div className="footer__wrapper">
              <div className="footer__grid">
                <div className="footer__section">
                  <div className="footer__logo-group">
                    <div className="footer__logo-and-copyright">
                      <NavLink to="/" className="footer__logo-iamge">
                        <img
                          src={ownerLogov2}
                          alt="owner-logo"
                          className="footer__logo-image"
                        />
                      </NavLink>
                      <p>{currentYear} &copy; Copyright.</p>
                    </div>
                    <div className="footer__social-wrapper social-icons__wrapper">
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
                  </div>
                </div>
                <div className="footer__section">
                  <h3>Products</h3>
                  <ul>
                    <li>Prices Drop</li>
                    <li>New Products</li>
                    <li>Best Sales</li>
                    <li>Contact Us</li>
                    <li>Sitemap</li>
                    <li>Stores</li>
                  </ul>
                </div>
                <div className="footer__section">
                  <h3>Our Company</h3>
                  <ul>
                    <li>Delivery</li>
                    <li>Legal Notice</li>
                    <li>Terms And Conditions</li>
                    <li>About Us</li>
                    <li>Secure Payment</li>
                    <li>My Account</li>
                  </ul>
                </div>
                <div className="footer__section">
                  <h3>Your Account</h3>
                  <ul>
                    <li>Product Support</li>
                    <li>Checkout</li>
                    <li>License Policy</li>
                    <li>Affiliate</li>
                    <li>Locality</li>
                    <li>Order Tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
