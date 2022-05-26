import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from '../components/Card';
import Categories from '../components/Categories';
import './StyleSheet/Search.css';

class Search extends React.Component {
  state = {
    inputValue: '',
    produtos: [],
  };

  // Controla campo de pesquisa
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  // Realiza pesquisa a partir do campo de pesquisa e categorias
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
      <div className="main-container">
        <Categories handleApertar={ this.handleClick } />
        <section className="content-container">
          {/* CAMPO DE PESQUISA E BOTÃO */}
          <div className="control-search">
            <input
              type="text"
              data-testid="query-input"
              name="inputValue"
              value={ inputValue }
              onChange={ this.handleChange }
            />
            <button
              data-testid="query-button"
              onClick={ this.handleClick }
              type="button"
            >
              Pesquisar
            </button>
          </div>
          {/* LINK PARA CARRINHO DE COMPRAS */}
          <Link
            to="/carrinho"
            data-testid="shopping-cart-button"
            className="link-cart"
          >
            <span>Carrinho de compras</span>
            {/* LOCAS DO CONTADOR DE ITEMS NO CARRINHO */}
            <span>{'0 >'}</span>
          </Link>
          {/* LISTAGEM DE PRODUTOS */}
          <article className="product-conteiner">
            <p className="initial-message" data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            <div className="product-list">
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
          </article>
        </section>
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
