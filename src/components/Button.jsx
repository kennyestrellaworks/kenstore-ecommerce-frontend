import React from "react";
import { Link } from "react-router-dom";

export const Button = ({
  to,
  type,
  className,
  hasIcon,
  buttonContent,
  onClick,
  disabled,
}) => {
  return (
    <>
      {type === "button" && (
        <button className={className} onClick={onClick} disabled={disabled}>
          {hasIcon && hasIcon}
          <span className="button__primary-wrapper">{buttonContent}</span>
        </button>
      )}

      {type === "link" && (
        <Link to={to} className={className}>
          {hasIcon && hasIcon}
          <span className="button__secondary-wrapper">{buttonContent}</span>
        </Link>
      )}
    </>
  );
};
