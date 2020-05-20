import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = props => {
  return (
    <div className="nav-container">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/productslist">
          <li>Products</li>
        </Link>
        {props.username === "soal" ? (
          <button>signout</button>
        ) : (
          <Link to="/signin">
            <li>Signin</li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
