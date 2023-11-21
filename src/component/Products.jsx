import React from "react";
import { ApiTopPropducts } from "../apifolder/ApiTopPropducts";
import Product from "./Product";
const Products = () => {
  return (
    <div className="p-5 flex flex-wrap">
      {ApiTopPropducts.map((product, index) => (
        <Product item={product} key={index} />
      ))}
    </div>
  );
};

export default Products;
