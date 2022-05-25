import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';

class Search extends React.Component {
  state = {
    Inputs: '',
    categoryList: [],
  };

  handleClick = async ({ target }) => {
    const categoria = target.name;
    const { Inputs } = this.state;
    const retorno = await getProductsFromCategoryAndQuery(Inputs, categoria);
    this.setState({
      categoryList: retorno,
    });
  };

  render() {
    const { categoryList } = this.state;
    return (
      <div>
        <Link to="/carrinho" data-testid="shopping-cart-button">Carrinho de compras</Link>
        <input type="text" />
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <Categories handleClick={ this.handleClick() } />
      </div>
    );
  }
}

export default Search;
