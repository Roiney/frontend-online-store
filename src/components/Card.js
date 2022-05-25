import React from 'react';
import PropTypes from 'prop-types';
import './Categories.css';

class Card extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <div data-testid="product" className="item">
        <h1>{ title }</h1>
        <p>{ price }</p>
        <img alt={ thumbnail } src={ thumbnail } />
      </div>

    );
  }
}

Card.propTypes = {
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Card;
