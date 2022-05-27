import React from 'react';
import { Link } from 'react-router-dom';
import {
  readSavedProducts,
  removeAllProduct,
  removeProduct,
  saveProduct,
} from '../services/storageCart';
import './StyleSheet/ShoppingCart.css';

class ShoopingCart extends React.Component {
  state = {
    produtos: [],
    filteredProducts: [],
    hasItems: false,
  }

  componentDidMount() {
    const produtos = readSavedProducts();
    const filteredProducts = this.filterProducts(produtos);
    if (produtos.length > 0) {
      this.setState({
        hasItems: true,
        produtos,
        filteredProducts,
      });
    }
  }

  // Filtra os produtos para exibir na tela sem repetição
  filterProducts = (products) => products
    .map((produto) => JSON.stringify(produto))
    .filter((produto, index, self) => self.indexOf(produto) === index)
    .map((produto) => JSON.parse(produto));

  // Incrementa contagem de produtos a partir do click
  increaseQuantity = ({ target: { name: idProduct } }) => {
    const { filteredProducts, produtos } = this.state;
    const productAdd = filteredProducts.find(({ id }) => idProduct === id);
    const quantityProduct = produtos
      .filter(({ id: idProduto }) => idProduto === idProduct).length;
    console.log(productAdd.available_quantity);
    console.log(quantityProduct);
    if (quantityProduct < productAdd.available_quantity) {
      saveProduct(productAdd);
      this.setState((prevState) => ({
        produtos: [...prevState.produtos, productAdd],
      }));
    }
  }

  // Decrementa contagem de produtos a partir do click
  decreaseQuantity = ({ target: { name: idProduct } }) => {
    const { filteredProducts, produtos } = this.state;
    const quantityProduct = produtos
      .filter(({ id: idProduto }) => idProduto === idProduct).length;
    const productRemove = filteredProducts.find(({ id }) => idProduct === id);
    if (quantityProduct > 1) {
      removeProduct(productRemove);
      const newCartProducts = readSavedProducts();
      this.setState({
        produtos: [...newCartProducts],
      });
    }
  }

  // Remove o produto totalmente do carrinho
  deleteProduct = ({ target: { name: idProduct } }) => {
    const { filteredProducts } = this.state;
    const productDelete = filteredProducts.find(({ id }) => idProduct === id);
    removeAllProduct(productDelete);
    const newProducts = readSavedProducts();
    const newFilteredProducts = this.filterProducts(newProducts);
    if (newProducts.length === 0) {
      this.setState({ hasItems: false });
    }
    this.setState({
      produtos: [...newProducts],
      filteredProducts: [...newFilteredProducts],
    });
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
                  <div className="container-cartProduct" key={ id }>
                    <button
                      type="button"
                      name={ id }
                      onClick={ this.deleteProduct }
                    >
                      X
                    </button>
                    <img src={ thumbnail } alt={ thumbnail } />
                    <h2 data-testid="shopping-cart-product-name">{ title }</h2>
                    <p>{ price }</p>
                    <div>
                      <button
                        type="button"
                        data-testid="product-decrease-quantity"
                        name={ id }
                        onClick={ this.decreaseQuantity }
                      >
                        -
                      </button>
                      <span
                        data-testid="shopping-cart-product-quantity"
                      >
                        {
                          produtos.filter(({ id: idProduto }) => idProduto === id).length
                        }
                      </span>
                      <button
                        type="button"
                        data-testid="product-increase-quantity"
                        name={ id }
                        onClick={ this.increaseQuantity }
                      >
                        +
                      </button>
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
