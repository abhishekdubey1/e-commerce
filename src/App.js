import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import "./styles.css";
import Home from "./Components/Home";
import ProductList from "./Components/ProductList";
import Signin from "./Components/Signin";
import Navigation from "./Components/Navigation";

const ProtectedRoute = ({ Component, username, ...rest }) => {
  return (
    <Route
      {...rest}
      //  component={Home}
      render={props => {
        if (!username) {
          return <Redirect to="/signin" />;
        }
        return <Component username={username} {...props} />;
      }}
    />
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleLogin = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    this.setState({
      username,
      password
    });
  };
  render() {
    const { username } = this.state;
    console.log("Username", this.state.username);
    return (
      <div className="App">
        <BrowserRouter>{/*Acts like a parent container*/}
          <Navigation username={username} />
          
          <ProtectedRoute exact path="/" Component={Home} username={username} />
          <ProtectedRoute
            exact
            path="/productslist"
            Component={ProductList}
            username={"soal"}
          />
          <Route
            path="/signin"
            // component={Signin}
            render={props => {
              if (username === "soal") {
                return <Redirect to="/" />;
              }
              return (
                <Signin
                  username={username}
                  handleLogin={this.handleLogin}
                  {...props}
                />
              );
            }}
          />
          {/* <Signin handleLogin={this.handleLogin} /> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

