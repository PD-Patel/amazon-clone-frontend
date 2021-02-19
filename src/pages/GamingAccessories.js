import React, { useEffect, useState } from "react";

import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import "./ProductPage.css";
import ProductCard from "../component/ProductCard";
import server from "../mongodb";
function GamingAccessories() {
  const [products, setProducts] = useState();

  const [{ basket }, dispatch] = useStateValue();
  useEffect(() => {
    const fetchdata = async () => {
      const data = await server.get("/products/gaming/data");
      setProducts(data);
    };

    fetchdata();
  }, [products]);

  // products.map((product) => {
  //   console.log(product.data().image);
  // });
  console.log(products);

  return (
    <div className="gaming">
      <div className="page">
        {products?.data?.map((product) => (
          <ProductCard
            id={product.id}
            image={product.imgUrl}
            rating={product.rating}
            price={product.price}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
}

export default GamingAccessories;
