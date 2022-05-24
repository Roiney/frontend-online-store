import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';

function Search() {
  return (
    <div>
      <Link to="/carrinho" data-testid="shopping-cart-button">Carrinho de compras</Link>
      <input type="text" />
      <span data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </span>
      <Categories />
    </div>
  );
}

export default Search;
