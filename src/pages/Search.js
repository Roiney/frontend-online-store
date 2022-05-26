import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from '../components/Card';
import Categories from '../components/Categories';
import '../components/Categories.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      produtos: [],
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = async (event) => {
    const { target: { id } } = event;
    const categoria = id;
    const { inputValue } = this.state;
    const APIResponse = await getProductsFromCategoryAndQuery(
      categoria,
      inputValue,
    );
    const response = APIResponse.results;
    this.setState({ produtos: response });
  };

  render() {
    const { inputValue, produtos } = this.state;
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
        <button data-testid="query-button" onClick={ this.handleClick } type="button">
          Pesquisar
        </button>
        <Categories handleApertar={ this.handleClick } />
        <p>
          <span data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
        </p>
        <div className="items">
          {produtos.map((itens) => (
            <Card
              id={ itens.id }
              key={ itens.id }
              price={ itens.price }
              title={ itens.title }
              thumbnail={ itens.thumbnail }
              produto={ itens }
            />
          ))}
        </div>
      </div>
    );
  }
}
Search.prototypes = {
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Search;
