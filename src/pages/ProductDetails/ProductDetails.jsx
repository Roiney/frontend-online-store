import React from 'react';
import PropTypes from 'prop-types';
import './ProductDetails.css';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  state = {
    produto: {},
    atributos: [],
  }

  async componentDidMount() {
    await this.fetchProduct();
  }

  fetchProduct = async () => {
    // const { match: { params: { id } } } = this.props;
    const id = 'MLB2187832413';
    const url = `https://api.mercadolibre.com/items/${id}`;
    const response = await fetch(url);
    const produto = await response.json();
    console.log(produto);
    this.setState({ produto, atributos: produto.attributes });
  }

  render() {
    const {
      produto: {
        title,
        price,
        original_price: totalPrice,
        thumbnail,
        currency_id: currency,
        available_quantity: quantidade,
      },
      atributos,
    } = this.state;
    return (
      <section className="container-product">
        <Link to="/">Home</Link>
        <Link to="/carrinho">Carrinho de compras</Link>
        <div className="container-image-description">
          <div className="image-product">
            <img src={ thumbnail } alt="Imagem do produto" />
          </div>
          <div className="details-product">
            <h3 data-testid="product-detail-name">{ title }</h3>
            <p>{ `${currency} ${price}` }</p>
            <p>{`Estoque: ${quantidade}`}</p>
          </div>
        </div>
        <section className="attr-buy">
          <ul className="atributos">
            {
              atributos.map(({ name, value_name: value, id }) => (
                <li key={ id }>{` ${name}: ${value} `}</li>
              ))
            }
          </ul>
          <div className="add-carrinho">
            <p>{ `De: ${currency} ${totalPrice}` }</p>
            <p>{ `Por: ${currency} ${price}` }</p>
            <button type="button">Adicionar ao carrinho</button>
          </div>
        </section>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
