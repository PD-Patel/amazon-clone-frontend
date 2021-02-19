import moment from "moment";
import React, { useEffect, useState } from "react";
import Row from "../component/Row";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import "./Order.css";
function Order() {
  const [{ user }] = useStateValue();
  const [order, setOrder] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      const data = await db
        .collection("users")
        .doc(user?.email)
        .collection("order")
        .get();
      setOrder(data.docs);
    };
    fetchdata();

    order?.map((e) => {
      console.log("hello", e.data());
    });
  }, []);

  return (
    <div className="order-page">
      <h1 className="order-title">Your Orders</h1>

      {/* moment.unix(created).format("MMMM Do YYYY, h:mma") */}
      <div className="order-content">
        {order?.map((product) => (
          <div className="orderedProduct">
            <div className="order-detail">
              <div className="orderPlaced-detail">
                <div className="order-date">
                  <p className="order-label">ORDER PLACED</p>
                  <p className="orderDate">
                    {moment.unix(product.data().created).format("MMMM Do YYYY")}
                  </p>
                </div>

                <div className="order-total">
                  <p className="order-label">TOTAL</p>
                  <p className="order-price">₹ {product.data().amount}</p>
                </div>
              </div>

              <div className="order-id">
                <p>ORDER # {product.id}</p>
              </div>
            </div>

            <div className="order-products">
              {product.data().basket?.map((e) => (
                <Row title={e.title} image={e.image} price={e.price} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
