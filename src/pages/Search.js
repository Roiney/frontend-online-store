import React from 'react';
import { Link } from 'react-router-dom';
import getProductsFromCategoryAndQuery from '../services/api';
import Card from '../components/Card';

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

  handleClick = async () => {
    const { inputValue } = this.state;
    const APIResponse = await getProductsFromCategoryAndQuery(undefined, inputValue);
    const response = APIResponse.results;
    this.setState({ produtos: response });
  }

  render() {
    const { inputValue, produtos } = this.state;
    return (
      <div>
        <Link to="/carrinho" data-testid="shopping-cart-button">Carrinho de compras</Link>
        <input type="text" data-testid="query-input" name="inputValue" value={ inputValue } onChange={ this.handleChange } />
        <button data-testid="query-button" onClick={ this.handleClick }>Pesquisar</button>
        <p>
          <span data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
        </p>
        <div>
          { produtos.map((itens) => (<Card id={ itens.id } Key={ itens.id } price={ itens.price } title={ itens.title } thumbnail ={ itens.thumbnail }/>))}
        </div>
      </div>
    );
  }
}

export default Search;
