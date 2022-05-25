import React from 'react';
import PropTypes from 'prop-types';
import './ProductDetails.css';
import { Link } from 'react-router-dom';
import { saveProduct } from '../../services/carrinhoCompras';

class ProductDetails extends React.Component {
  state = {
    produto: {},
    atributos: [],
    imagem: '',
  }

  async componentDidMount() {
    await this.fetchProduct();
  }

  fetchProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const url = `https://api.mercadolibre.com/items/${id}`;
    const response = await fetch(url);
    const produto = await response.json();
    this.setState({ produto,
      atributos: produto.attributes,
      imagem: produto.pictures.find((_picture, index) => index === 0).url,
    });
  }

  handleClick = () => {
    const { produto } = this.state;
    saveProduct(produto);
  }

  render() {
    const {
      produto: {
        title,
        price,
        original_price: totalPrice,
        currency_id: currency,
        available_quantity: quantidade,
      },
      atributos,
      imagem,
    } = this.state;
    return (
      <section className="container-product">
        <Link to="/">Home</Link>
        <Link to="/carrinho" data-testid="shopping-cart-button">Carrinho de compras</Link>
        <div className="container-image-description">
          <div className="image-product">
            <img src={ imagem } alt="Imagem do produto" />
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
            <button
              data-testid="product-detail-add-to-cart"
              type="button"
              onClick={ this.handleClick }
            >
              Adicionar ao carrinho
            </button>
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
