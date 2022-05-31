import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import ShoopingCart from './pages/ShoppingCart';
import './App.css';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import LoginPage from './pages/LoginPage';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/produto/:id"
          render={ (props) => <ProductDetails { ...props } /> }
        />
        <Route path="/carrinho" component={ ShoopingCart } />
        <Route path="/checkout" component={ Checkout } />
        <Route path="/login" component={ LoginPage } />
        <Route path="/forgot-pass" component={ ForgotPassword } />
        <Route exact path="/" component={ Search } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
