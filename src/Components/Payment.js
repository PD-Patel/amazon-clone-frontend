import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import styled from "styled-components";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import Address from "./Address";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Navbar from "./Navbar";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [{ address, basket, user }, dispatch] = useStateValue();
  const [clientSecret, setClientSecret] = useState("");
  const elements = useElements();
  const stripe = useStripe();

  const navigate = useNavigate();
  useEffect(() => {
    const fetchClientSecret = async () => {
      const data = await axios.post("/payment/create", {
        amount: getBasketTotal(basket),
      });

      setClientSecret(data.data.clientSecret);
    };

    fetchClientSecret();
    console.log("clientSecret is >>>>", clientSecret);
  }, []);

  const confirmPayment = async (e) => {
    e.preventDefault();

    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then((result) => {
        axios.post("/orders/add", {
          basket: basket,
          price: getBasketTotal(basket),
          email: user?.email,
          address: address,
        });

        dispatch({
          type: "EMPTY_BASKET",
        });
        navigate("/");
      })
      .catch((err) => console.warn(err));
  };

  return (
    <Container>
      <Navbar />

      <Main>
        <ReviewContainer>
          <h2>Review Your Order</h2>

          <AddressContainer>
            <h5>Shipping Address</h5>

            <div>
              <p>{address.fullName}</p>
              <p>{address.flat}</p>
              <p>{address.area}</p>
              <p>{address.landmark}</p>
              <p>
                {address.city} {address.state}
              </p>

              <p>Phone: {address.phone}</p>
            </div>
          </AddressContainer>

          <PaymentContainer>
            <h5>Payment Method</h5>

            <div>
              <p>Card Details</p>

              {/* Card Element */}

              <CardElement />
            </div>
          </PaymentContainer>

          <OrderContainer>
            <h5>Your Order</h5>

            <div>
              {basket?.map((product) => (
                <Product>
                  <Image>
                    <img src={product.image} alt="" />
                  </Image>
                  <Description>
                    <h4>{product.title}</h4>

                    <p>₹ {product.price}</p>
                  </Description>
                </Product>
              ))}
            </div>
          </OrderContainer>
        </ReviewContainer>
        <Subtotal>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  Subtotal ( {basket.length} items ) : <strong> {value}</strong>
                </p>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType="text"
            thousandSeparator={true}
            prefix={"₹ "}
          />

          <button onClick={confirmPayment}>Place Order</button>
        </Subtotal>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  max-width: 1400px;
  background-color: rgb(234, 237, 237);
`;

const Main = styled.div`
  padding: 15px;
  display: flex;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ReviewContainer = styled.div`
  background-color: #fff;
  flex: 0.7;
  padding: 15px;
  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }
`;

const AddressContainer = styled.div`
  margin-top: 20px;
  div {
    margin-top: 10px;
    margin-left: 10px;

    p {
      font-size: 14px;
      margin-top: 4px;
    }
  }
`;

const PaymentContainer = styled.div`
  margin-top: 15px;

  div {
    margin-top: 15px;
    margin-left: 15px;

    p {
      font-size: 14px;
    }
  }
`;

const OrderContainer = styled.div`
  margin-top: 30px;
`;

const Product = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.div`
  flex: 0.3;
  img {
    width: 100%;
  }
`;
const Description = styled.div`
  flex: 0.7;

  h4 {
    font-weight: 600;
    font-size: 18px;
  }

  p {
    font-weight: 600;
    margin-top: 10px;
  }

  button {
    background-color: transparent;
    color: #1384b4;
    border: none;
    outline: none;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const Subtotal = styled.div`
  flex: 0.3;
  background-color: #fff;
  margin-left: 15px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    flex: none;
    margin-top: 20px;
  }
  p {
    font-size: 20px;
  }

  small {
    display: flex;
    align-items: center;
    margin-top: 10px;

    span {
      margin-left: 10px;
    }
  }

  button {
    width: 65%;
    height: 33px;
    margin-top: 20px;
    background-color: #ffd814;
    border: none;
    outline: none;

    border-radius: 8px;
  }
`;
export default Payment;
