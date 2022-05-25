import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { name, value } = this.state;
    console.log(name);
    console.log(value);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <Link to="/carrinho" data-testid="shopping-cart-button">
          Carrinho de compras
        </Link>
        <input
          type="text"
          data-testid="query-input"
          name="inputValue"
          value={ inputValue }
          onChange={ this.handleChange }
        />
        <button data-testid="query-button" type="submit" onClick={ this.handleClick }>
          Pesquisar
        </button>
        <p>
          <span data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
        </p>
        <Categories />
      </div>
    );
  }
}

export default Search;
