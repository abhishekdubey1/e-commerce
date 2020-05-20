import React from "react";
import "./productList.css";
import { products } from "../fakeData";

const ProductList = props => {
  return (
    <div className="list-container">
      <ul className="product-list">
        {products.map((item, index) => {
          return (
            <li key={index}>
              {item.name}
              <p> {item.category} </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;