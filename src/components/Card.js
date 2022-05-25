import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Categories.css';

class Card extends React.Component {
  render() {
    const { title, price, thumbnail, id } = this.props;
    return (
      <div data-testid="product">
        <Link to={ `/produto/${id}` }>
          <h1>{ title }</h1>
          <p>{ price }</p>
          <img alt={ thumbnail } src={ thumbnail } />
        </Link>
      </div>

    );
  }
}

Card.propTypes = {
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
