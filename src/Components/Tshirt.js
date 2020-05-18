import React from 'react';
import logo from '../images/t-shirt.jpeg'; // Tell webpack this JS file uses this image

// console.log(logo); // /logo.84287d09.png
// function Tshirt() {
//   // Import result is the URL of your image
  
// }
const Tshirt = (props) => {
  return (
    <div>
      <img src={logo} alt="Logo" />;
    </div>

  )
}
export default Tshirt;