import React from "react";
import { useStateValue } from "../StateProvider";

import "./Row.css";

function Row({ id, rating, title, image, price, button }) {
  const [{ user, basket }, dispatch] = useStateValue();
  const RemoveFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",

      id: id,
    });
  };
  return (
    <div className={`product-row`}>
      <div className="product-img">
        <img src={image} alt="" className="productImage" />
      </div>

      <div className="product-content">
        <div className="product-detail">
          <h4>{title}</h4>

          <div className="product-price">
            <p className="price">₹ {price}</p>
          </div>
        </div>

        {button && (
          <p onClick={RemoveFromCart} className="remove-button">
            Remove From Cart
          </p>
        )}
      </div>
    </div>
  );
}

export default Row;
