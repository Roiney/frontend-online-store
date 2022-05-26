import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const { imagem, valor, nome } = this.props;
    return (
      <div>
        <img
          src={ imagem }
          alt={ `${imagem}` }
        />
        <h3>{ nome }</h3>
        <h3>{ valor }</h3>
      </div>
    );
  }
}

Product.propTypes = {
  imagem: PropTypes.string.isRequired,
  valor: PropTypes.number.isRequired,
  nome: PropTypes.string.isRequired,
};
export default Product;
