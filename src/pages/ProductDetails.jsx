import React from 'react';
import PropTypes from 'prop-types';
import './StyleSheet/ProductDetails.css';
import { Link } from 'react-router-dom';
import { saveProduct } from '../services/storageCart';

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

  // Salva produto no LocalStorage
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
      },
      atributos,
      imagem,
    } = this.state;
    return (
      <section className="container-product">
        {/* LINKS DE NAVEGAÇÃO */}
        <nav className="container-nav">
          <Link to="/" className="link-home">{'< Home'}</Link>
          <div>
            <Link
              to="/carrinho"
              data-testid="shopping-cart-button"
              // CLASSE ESTILIZADA NO SEARCH.CSS
              className="link-cart"
            >
              <span>Carrinho de compras</span>
              {/* LOCAL DO CONTADOR DE ITEMS NO CARRINHO */}
              <span>{'0 >'}</span>
            </Link>
          </div>
        </nav>
        {/* DETALHES DO PRODUTO */}
        <section className="container-info-product">
          <div className="container-image">
            <img src={ imagem } alt="Imagem do produto" />
          </div>

          <div className="container-details">
            <h2 data-testid="product-detail-name">{ title }</h2>
            <p>{ `R$ ${price}` }</p>
            <ul className="details">
              {
                atributos.map(({ name, value_name: value, id }) => (
                  <li key={ id }>{` ${name}: ${value} `}</li>
                ))
              }
            </ul>
          </div>
        </section>
        {/* FORMULARIO DE AVALIAÇÃO E BOTÃO ADD CARRINHO */}
        <section className="container-evaluation">
          {/* LOCAL DO FORMULARIO DE AVALIAÇÃO */}
          <h1>Formulario de avaliação</h1>

          <div className="add-carrinho">
            <p>{ `De: R$ ${totalPrice}` }</p>
            <p>{ `Por: R$ ${price}` }</p>
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
