import React from 'react';
import FormCheckout from '../components/FormCheckout';
import { readSavedProducts } from '../services/storageCart';
import './StyleSheet/Checkout.css';

class Checkout extends React.Component {
  state = {
    filteredProducts: [],
    products: [],
    totalPrice: 0,
    payOption: 'credito',
    userInfo: {
      nome: '',
      cpf: '',
      email: '',
      tel: '',
      cep: '',
      endereco: '',
      complemento: '',
      numero: '',
      cidade: '',
      estado: '',
    },
    // payOption: '',
    // creditCard: '',
  };

  componentDidMount() {
    const products = readSavedProducts();
    const filteredProducts = this.filterProducts(products);
    const totalPrice = this.calculateTotalPrice(products);
    this.setState({ products, filteredProducts, totalPrice });
  }

  filterProducts = (products) => products
    .map((produto) => JSON.stringify(produto))
    .filter((produto, index, self) => self.indexOf(produto) === index)
    .map((produto) => JSON.parse(produto));

    calculateTotalPrice = (products) => products
      .reduce((accPrice, { price }) => {
        let novoAcc = accPrice;
        novoAcc += price;
        return novoAcc;
      }, 0);

  handleChange = ({ target: { value, name } }) => {
    this.setState((prevState) => ({
      userInfo: { ...prevState.userInfo, [name]: value },
    }));
  }

  render() {
    const { products, filteredProducts, payOption, totalPrice, userInfo } = this.state;
    return (
      <div>
        <section className="container-product-list">
          <h2>Revise seu Produtos</h2>
          <hr />
          {filteredProducts.map(({ title, price, thumbnail, id }) => (
            <div className="container-product-review" key={ id }>
              <div>
                <img src={ thumbnail } alt={ thumbnail } />
                <h3>{title}</h3>
              </div>
              <p>
                { `Qtd: ${products
                  .filter(({ id: idProduto }) => idProduto === id).length}` }

              </p>
              <p>{`R$ ${price.toFixed(2)}`}</p>
            </div>
          ))}
          <p className="totalPrice">{ `Total: R$ ${totalPrice.toFixed(2)}` }</p>
        </section>
        <section className="container-info-user">
          <h2>Informações do Comprador</h2>
          <hr />
          <FormCheckout
            userInfo={ userInfo }
            handleChange={ this.handleChange }
          />
        </section>
        <section className="container-pay-method">
          <h2>Método de Pagamento</h2>
          <hr />
          <div className="container-pay-options">
            <label htmlFor="boletoRadio">
              <input id="boletoRadio" type="radio" name="payment" value="boleto" />
              Boleto
            </label>
            <label htmlFor="creditoRadio">
              <input id="creditoRadio" type="radio" name="payment" value="credito" />
              Cartão de Crédito
            </label>
            <div>
              {
                payOption === 'credito' && (
                  <section className="container-creditCard">
                    <label htmlFor="visaRadio">
                      <input
                        id="visaRadio"
                        type="radio"
                        name="creditCard"
                        value="Visa"
                      />
                      Visa
                    </label>
                    <label htmlFor="masterRadio">
                      <input
                        id="masterRadio"
                        type="radio"
                        name="creditCard"
                        value="MasterCard"
                      />
                      MasterCard
                    </label>
                    <label htmlFor="eloRadio">
                      <input id="eloRadio" type="radio" name="creditCard" value="Elo" />
                      Elo
                    </label>
                  </section>
                )
              }
            </div>
          </div>
        </section>
        <button className="finish-button" type="button">Comprar</button>
      </div>
    );
  }
}

export default Checkout;
