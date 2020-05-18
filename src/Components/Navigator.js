import React from 'react';
import {Link} from 'react-router-dom'

const Navigator = (props) => {
  return (
    <div className="nav-bar">
      <ul className="nav-bar-list">
        <Link to="/home"><li>Home</li></Link>
        <Link to="/productlist"><li>Product List</li></Link>
        <Link to="/signin"><li>Signin</li></Link>
      </ul>
    </div>

  )
}
export default Navigator;