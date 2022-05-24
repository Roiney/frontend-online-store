import React from 'react';
import { Link } from 'react-router-dom';
import ProductCategory from './ProductCategory';

function Search() {
  return (
    <div>
      <Link to="/carrinho" data-testid="shopping-cart-button">Carrinho de compras</Link>
      <input type="text" />
      <span data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </span>
      <ProductCategory />
    </div>
  );
}

export default Search;
