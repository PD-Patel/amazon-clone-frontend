import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import Row from "../component/Row";
import { useStateValue } from "../StateProvider";
import "./PlaceOrder.css";
import { getBasketTotal } from "../reducer";
import CurrencyFormat from "react-currency-format";
import { db } from "../firebase";
import axios from "../axios";
import { useHistory } from "react-router-dom";

function PlaceOrder() {
  const [{ user, basket }, dispatch] = useStateValue();
  const [address, setAddress] = useState();
  console.log("payment >>> ", basket);
  const stripe = useStripe();
  const elements = useElements();
  const [disabled, setDisable] = useState(true);
  const [error, setError] = useState(null);
  const [processing, setProccessing] = useState("");
  const [succeded, setSucceded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const history = useHistory();

  // --------------------------------------------------------------------------------------------------

  // --------------------------------------------------------------------------------------------------
  // stripe magic
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe accept currency in semi units
        url: `/payments/create?total=${
          getBasketTotal(basket).toFixed(2) * 100
        }`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("secret key >>>>>>>", clientSecret);

  // ---------------------------------------------------------------------------------------------------
  useEffect(() => {
    const fetchdata = async () => {
      const data = await db
        .collection("address")
        .doc(user?.email)

        .get();

      setAddress(data.data());
    };

    fetchdata();
  }, []);

  // --------------------------------------------------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProccessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment Confirmation

        db.collection("users")
          .doc(user?.email)
          .collection("order")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount / 100,
            created: paymentIntent.created,
          });

        setSucceded(true);
        setError(null);
        setProccessing("false");

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/");
      });
  };

  const handleChange = (event) => {
    // listen for change in the CardElement
    // and display any errors as the customer types their card details

    setDisable(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="place-order">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/confirm-banner._CB485949149_.gif"
        alt=""
        className="address-logo"
      />

      <h3>Review your order</h3>
      <p className="policyInfo">
        By placing your order, you agree to Amazon's privacy notice and
        conditions of use.
      </p>
      <div className="place-order-content">
        <div className="place-order-components">
          <div className="placeOrder-userInfo">
            <div className="user-address">
              <p className="addressTitle">Shipping address</p>
              <div className="addressInfo">
                <p>{address?.fullname}</p>
                <p>{address?.house}</p>
                <p>{address?.area}</p>
                <p>{address?.landmark}</p>
                <p>
                  {address?.city}, {address?.state}
                </p>
                <p>India</p>
                <p>Phone: {address?.mobileNumber}</p>
              </div>
            </div>

            <div className="payment-method">
              <p className="paymentTitle">Payment method</p>

              <div className="payment">
                <p>Card Details</p>
                <form>
                  <CardElement
                    onChange={handleChange}
                    className="card-element"
                  />
                </form>

                {error && <div>{error}</div>}
              </div>
            </div>
          </div>

          <div className="placeOrder-userProduct">
            {basket?.map((product) => (
              <Row
                image={product.image}
                title={product.title}
                price={product.price}
                button={false}
              />
            ))}
          </div>
        </div>

        <div className="place-order-price">
          <form onSubmit={handleSubmit}>
            <button
              className="place-order-button"
              disabled={processing || disabled || succeded}
            >
              <span>{processing ? <p>Processing</p> : "Place your order"}</span>
            </button>
          </form>
          <p className="order-summary"> Order Summary</p>

          <div className="items-price">
            <p>items:</p>
            <p>₹ {getBasketTotal(basket).toFixed(2)}</p>
          </div>

          <div className="delivery-price">
            <p>delivery:</p>
            <p>₹ 0</p>
          </div>

          <div className="total-price">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <div className="TotalPrice">
                    <h4>Order Total: </h4>
                    <h4>{value}</h4>
                  </div>
                </>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)} // Part of the homework
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹ "}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
