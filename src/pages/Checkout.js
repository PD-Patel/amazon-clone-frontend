import React from "react";
import Row from "../component/Row";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import "./Checkout.css";
import { useHistory } from "react-router-dom";
function Checkout() {
  const [{ basket, user }] = useStateValue();

  const history = useHistory();

  console.log("basket >>>>>>>>", basket);
  return (
    <div className="checkout-page">
      <div className="checkout-left">
        <h2> Shopping Cart</h2>

        {basket?.map((product) => (
          <Row
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            button={true}
          />
        ))}
      </div>

      <div className="checkout-right">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                {/* Part of the homework */}
                Subtotal ({basket.length} items):{" "}
                <strong className="price-tag">{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)} // Part of the homework
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹ "}
        />
        <button
          onClick={() => {
            user ? history.push("/pf_94994") : history.push("/login");
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Checkout;
