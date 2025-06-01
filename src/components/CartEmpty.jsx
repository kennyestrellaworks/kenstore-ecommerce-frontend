import { Button } from "./Button";

export const CartEmpty = () => {
  return (
    <div className="cart-empty">
      <div className="cart-empty__wrapper">
        <h1 className="heading__primary">Your cart is empty!</h1>
        <div className="cart-empty__button">
          <Button
            to={"/products"}
            type={"link"}
            className={
              "button button__primary single-product__add-to-cart-button"
            }
            buttonContent={"Shop Now"}
          />
        </div>
      </div>
    </div>
  );
};
