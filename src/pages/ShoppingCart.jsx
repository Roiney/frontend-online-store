import React from 'react';
import { Link } from 'react-router-dom';
import { readSavedProducts } from '../services/storageCart';
import './StyleSheet/ShoppingCart.css';

class ShoopingCart extends React.Component {
  state = {
    produtos: [],
    filteredProducts: [],
    hasItems: false,
  }

  componentDidMount() {
    const produtos = readSavedProducts();
    const filteredProducts = produtos
      .map((produto) => JSON.stringify(produto))
      .filter((produto, index, self) => self.indexOf(produto) === index)
      .map((produto) => JSON.parse(produto));
    if (produtos.length > 0) {
      this.setState({
        hasItems: true,
        produtos,
        filteredProducts,
      });
    }
  }

  render() {
    const { hasItems, produtos, filteredProducts } = this.state;
    return (
      <div>
        <Link to="/">Home</Link>
        {
          hasItems ? (
            <section>
              <h1>Items do carrinho</h1>
              {
                filteredProducts.map(({ title, price, thumbnail, id }) => (
                  <div key={ id }>
                    <button type="button">X</button>
                    <img src={ thumbnail } alt={ thumbnail } />
                    <h2 data-testid="shopping-cart-product-name">{ title }</h2>
                    <p>{ price }</p>
                    <div>
                      <button type="button">-</button>
                      <span
                        data-testid="shopping-cart-product-quantity"
                      >
                        {
                          produtos.filter(({ id: idProduto }) => idProduto === id).length
                        }
                      </span>
                      <button type="button">+</button>
                    </div>
                  </div>
                ))
              }
              <Link to="/checkout" data-testid="checkout-products">Finalizar Compra</Link>
            </section>
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
