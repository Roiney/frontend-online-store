import React from 'react';
import { Link } from 'react-router-dom';
import { readSavedProducts } from '../services/storageCart';
import './StyleSheet/ShoppingCart.css';

class ShoopingCart extends React.Component {
  state = {
    produtos: [],
    hasItems: false,
    quantidade: 1,
  }

  componentDidMount() {
    const produtos = readSavedProducts();
    if (produtos.length > 0) this.setState({ hasItems: true, produtos });
  }

  render() {
    const { hasItems, produtos, quantidade } = this.state;
    return (
      <div>
        <Link to="/">Home</Link>
        {
          hasItems ? (
            <div>
              <h1>Items do carrinho</h1>
              {
                produtos.map(({ title, price, thumbnail, id }) => (
                  <div key={ id }>
                    <h2 data-testid="shopping-cart-product-name">{title}</h2>
                    <img src={ thumbnail } alt={ thumbnail } />
                    <p>{price}</p>
                    <p data-testid="shopping-cart-product-quantity">{quantidade}</p>
                  </div>
                ))
              }
              <Link to="/checkout" data-testid="checkout-products">Finalizar Compra</Link>
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
