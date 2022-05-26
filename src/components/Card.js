import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { saveProduct } from '../services/storageCart';
import './StyleSheet/Card.css';

class Card extends React.Component {
  handleClick = async () => {
    const { produto } = this.props;
    saveProduct(produto);
  }

  render() {
    const { title, price, thumbnail, id } = this.props;
    return (
      <div className="product-container" data-testid="product">
        <Link
          className="product"
          data-testid="product-detail-link"
          to={ `/produto/${id}` }
        >
          <div>
            <h1>{ title }</h1>
          </div>
          <img alt={ thumbnail } src={ thumbnail } />
          <p>{ `R$ ${price}` }</p>
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
