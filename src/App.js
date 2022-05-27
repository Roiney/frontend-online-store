import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import ShoopingCart from './pages/ShoppingCart';
import './App.css';
import ProductDetails from './pages/ProductDetails';
import checkout from './pages/checkout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/produto/:id"
          render={ (props) => <ProductDetails { ...props } /> }
        />
        <Route path="/carrinho" component={ ShoopingCart } />
        <Route exact path="/" component={ Search } />
        <Route path="/checkout" component={ checkout } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
