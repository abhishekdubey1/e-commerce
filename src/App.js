import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import ProductList from './Components/ProductsList';
import Signin from './Components/Signin';
import Navigator from './Components/Navigator';



export default function App(){
  return (
    <div className="App">
      <BrowserRouter>
        <Navigator/>
        <Route path="/home" component={Home}></Route>
        <Route path="/productList" component={ProductList}></Route>
        <Route path="/signin" component={Signin}></Route>
      </BrowserRouter>
      
    </div>
  );
}
