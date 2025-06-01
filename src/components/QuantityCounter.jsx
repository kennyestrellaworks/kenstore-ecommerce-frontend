export const QuantityCounter = ({
  quantity,
  setQuantity,
  tempStockCount,
  disableButtons,
}) => {
  const increase = () => {
    if (quantity < tempStockCount) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="quantity-counter">
        <button
          onClick={decrease}
          className={`quantity-btn ${
            quantity < 2 || disableButtons ? "quantity-btn__disabled" : ""
          }`}
          disabled={quantity < 2 || disableButtons}
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
        <span className="quantity-number">{quantity ?? 1}</span>
        <button
          onClick={increase}
          className={`quantity-btn ${
            quantity === tempStockCount || disableButtons
              ? "quantity-btn__disabled"
              : ""
          }`}
          disabled={
            quantity === tempStockCount ||
            tempStockCount === 0 ||
            disableButtons
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
    </>
  );
};
