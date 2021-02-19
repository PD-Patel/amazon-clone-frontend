import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Rating from "@material-ui/lab/Rating";
import { useStateValue } from "../StateProvider";
function ProductCard({ id, image, title, rating, price, image_width }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="productCard">
      <div className="productCard">
        <div className="productCard-Image">
          <img src={image} alt="" className={image_width} />
        </div>

        <h4>{title}</h4>

        <div className="productCard-rating">
          <Rating
            name="customized-empty"
            defaultValue={rating}
            precision={0.5}
            emptyIcon={
              <StarBorderIcon className="star-border" fontSize="inherit" />
            }
            readOnly
          />
        </div>
        <div className="productPrice">
          <small>₹ </small>
          <p>{price}</p>
        </div>

        <button onClick={addToBasket}>Add to cart</button>
      </div>
    </div>
  );
}
export default ProductCard;
