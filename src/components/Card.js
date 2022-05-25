import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Categories.css';
import { saveProduct } from '../services/carrinhoCompras';

class Card extends React.Component {
  handleClick = async () => {
    const { produto } = this.props;
    saveProduct(produto);
  }

  render() {
    const { title, price, thumbnail, id } = this.props;
    return (
      <div data-testid="product">
        <Link data-testid="product-detail-link" to={ `/produto/${id}` }>
          <h1>{ title }</h1>
          <p>{ price }</p>
          <img alt={ thumbnail } src={ thumbnail } />
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar ao Carrinho
        </button>
      </div>

    );
  }
}

Card.propTypes = {
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  produto: PropTypes.shape().isRequired,
};

export default Card;
