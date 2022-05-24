import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './pages/Search'
import ShoopingCart from './pages/ShoppingCart/ShoppingCart';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/carrinho" component={ ShoopingCart } />
          <Route exact path="/" component={ Search } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
