import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import ShoopingCart from './pages/ShoppingCart/ShoppingCart';
import './App.css';
import ProductDetails from './pages/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            path="/produto/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route path="/carrinho" component={ ShoopingCart } />
          <Route exact path="/" component={ Search } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
