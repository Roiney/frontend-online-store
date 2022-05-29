import React from 'react';
import PropTypes from 'prop-types';
import './StyleSheet/ProductDetails.css';
import { Link } from 'react-router-dom';
import { saveProduct, readSavedProducts } from '../services/storageCart';
import EvaluationForm from '../components/EvaluationForm';

class ProductDetails extends React.Component {
  state = {
    produto: {},
    atributos: [],
    availableQuantity: '',
    imagem: '',
    totalCarrinho: 0,
  }

  async componentDidMount() {
    // Altera a quantidade que aparece do lado do carrinho quando abrir a pagina
    this.handleAmount();
    await this.fetchProduct();
  }

  fetchProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const url = `https://api.mercadolibre.com/items/${id}`;
    const response = await fetch(url);
    const produto = await response.json();
    this.setState({
      produto,
      atributos: produto.attributes,
      imagem: produto.pictures.find((_picture, index) => index === 0).url,
      availableQuantity: produto.available_quantity,
    });
  }

  // Salva produto no LocalStorage
  handleClick = () => {
    const { produto } = this.state;
    saveProduct(produto);
  }

  // Altera a quantidade que aparece do lado do carrinho
  handleAmount = () => {
    const total = readSavedProducts().length;
    this.setState({
      totalCarrinho: total,
    });
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
      availableQuantity,
      totalCarrinho,
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
              <span data-testid="shopping-cart-size">{totalCarrinho}</span>
            </Link>
          </div>
        </nav>
        {/* DETALHES DO PRODUTO */}
        <section className="container-info-product">
          <div className="container-image">
            <img src={ imagem } alt="Imagem do produto" />
          </div>

          <div className="container-details">
            <h2 data-testid="product-detail-name">{title}</h2>
            <p>{`R$ ${price}`}</p>
            <ul className="details">
              {
                atributos.map(({ name, value_name: value, id }) => (
                  <li key={ id }>{` ${name}: ${value} `}</li>
                ))
              }
              {/* Estilizar <li> abaixo removendo marca de listagem e
              aumentando o tamanho da fonte */}
              <li>
                {`Quantidade disponível: 
                ${availableQuantity}`}
              </li>
            </ul>
          </div>
        </section>
        <section className="container-evaluation">
          <h1>Avaliações</h1>
          <EvaluationForm />
          <div className="add-carrinho">
            <p>{`De: R$ ${totalPrice}`}</p>
            <p>{`Por: R$ ${price}`}</p>
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
