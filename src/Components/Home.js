import React from "react";
import { Redirect } from "react-router-dom";

const Home = props => {
  // if (!props.username) {
  //   return <Redirect to="/signin" />;
  // }
  return <div>Welcome {props.username}</div>;
};

export default Home;
