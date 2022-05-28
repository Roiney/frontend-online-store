import React from 'react';
import { readSavedProducts } from '../services/storageCart';
import './StyleSheet/Checkout.css';

class Checkout extends React.Component {
  state = {
    produtos: [],
  };

  componentDidMount() {
    const produtos = readSavedProducts();
    if (produtos.length > 0) this.setState({ produtos });
  }

  render() {
    const { produtos } = this.state;
    return (
      <div>
        <section className="container-product-list">
          <h2>Revise seu Produtos</h2>
          <hr />
          {produtos.map(({ title, price, thumbnail, id }) => (
            <div className="container-product-review" key={ id }>
              <div>
                <img src={ thumbnail } alt={ thumbnail } />
                <h3>{title}</h3>
              </div>
              <p>Qtd: 1</p>
              <p>{`R$ ${price.toFixed(2)}`}</p>
            </div>
          ))}
        </section>
        <section className="container-info-user">
          <h2>Informações do Comprador</h2>
          <hr />
          <div className="container-inputs">
            <input
              data-testid="checkout-fullname"
              placeholder="Nome Completo"
              id="inputNome"
            />

            <input
              data-testid="checkout-cpf"
              id="inputcpf"
              placeholder="CPF"
            />

            <input
              data-testid="checkout-email"
              id="inputemail"
              placeholder="E-mail"
            />

            <input
              data-testid="checkout-phone"
              id="inputphone"
              placeholder="Telefone"
            />

            <input
              data-testid="checkout-cep"
              id="inputcep"
              placeholder="CEP"
            />

            <input
              data-testid="checkout-address"
              id="inputaddress"
              placeholder="Endereço"
            />

            <input
              id="inputaddress"
              placeholder="Complemento"
            />

            <input
              id="inputaddress"
              placeholder="Número"
            />

            <input
              id="inputaddress"
              placeholder="Cidade"
            />
            <select>
              <option>Estado</option>
            </select>
          </div>
        </section>
        <section className="container-pay-method">
          <h2>Método de Pagamento</h2>
          <hr />
          <div className="container-pay-options">
            <label htmlFor="boletoRadio">
              <input id="boletoRadio" type="radio" name="Boleto" value="Boleto" />
              Boleto
            </label>
            <label htmlFor="visaRadio">
              <input id="visaRadio" type="radio" name="Visa" value="Visa" />
              Visa
            </label>
            <label htmlFor="masterRadio">
              <input id="masterRadio" type="radio" name="MasterCard" value="MasterCard" />
              MasterCard
            </label>
            <label htmlFor="eloRadio">
              <input id="eloRadio" type="radio" name="Elo" value="Elo" />
              Elo
            </label>
          </div>
        </section>
        <button className="finish-button" type="button">Comprar</button>
      </div>
    );
  }
}

export default Checkout;
