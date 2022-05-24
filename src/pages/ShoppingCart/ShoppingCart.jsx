import React from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCart.css';

class ShoopingCart extends React.Component {
  state = {
    hasItems: false,
  }

  render() {
    const { hasItems } = this.state;
    return (
      <div>
        <Link to="/">Home</Link>
        {
          hasItems ? (
            <div>
              <h1>Items do carrinho</h1>
            </div>
          ) : (
            <h1
              data-testid="shopping-cart-empty-message"
              className="empty-cart"
            >
              Seu carrinho está vazio
            </h1>
          )
        }
      </div>
    );
  }
}

export default ShoopingCart;
