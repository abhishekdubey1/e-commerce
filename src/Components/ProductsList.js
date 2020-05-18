import React from 'react';
import Tshirt from './Tshirt';

const ProductList = (props) => {
  return (
    <div className="ProductList">
      <div className="t-shirt-container">
        T-Shirt
        <span><button className="btn">Add to Cart</button></span>
        <Tshirt/>
        {/* <img src="../images/t-shirt.jpeg">t-shirt image</img> */}
      </div>
    </div>

  )
}
export default ProductList;