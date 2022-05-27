import React from 'react';
import { readSavedProducts } from '../services/storageCart';

class Checkout extends React.Component {
  state = {
    hasItems: false,
  };

  componentDidMount() {
    const produtos = readSavedProducts();
    if (produtos.length > 0) this.setState({ hasItems: true, produtos });
  }

  render() {
    const { hasItems, produtos, quantidade } = this.state;
    return (
      <div>
        <h1>Insira seus Dados.</h1>
        <label htmlFor="inputNome">
          Digite seu nome completo:
          <input data-testid="checkout-fullname" id="inputNome" />
        </label>
        <label htmlFor="inputemail">
          Digite seu E-mail:
          <input data-testid="checkout-email" id="inputemail" />
        </label>
        <label htmlFor="inputcpf">
          Digite seu CPF:
          <input data-testid="checkout-cpf" id="inputcpf" />
        </label>
        <label htmlFor="inputphone">
          Digite seu Telefone:
          <input data-testid="checkout-phone" id="inputphone" />
        </label>
        <label htmlFor="inputcep">
          Digite seu CEP:
          <input data-testid="checkout-cep" id="inputcep" />
        </label>
        <label htmlFor="inputaddress">
          Digite seu Endereço Completo:
          <input data-testid="checkout-address" id="inputaddress" />
        </label>
        {/* <form>
            <input type="radio" name="Boleto" value="Boleto" />
            Boleto
            <input type="radio" name="Visa" value="Visa" />
            Visa
            <input type="radio" name="MasterCard" value="MasterCard" />
            MasterCard
            <input type="radio" name="Elo" value="Elo" />
            Elo
          </form> */}
        {hasItems ? (
          <div>
            <h1>Items do carrinho</h1>
            {produtos.map(({ title, price, thumbnail, id }) => (
              <div key={ id }>
                <h2 data-testid="shopping-cart-product-name">{title}</h2>
                <img src={ thumbnail } alt={ thumbnail } />
                <p>{price}</p>
                <p data-testid="shopping-cart-product-quantity">{quantidade}</p>
              </div>
            ))}
          </div>
        ) : (
          <h1 data-testid="shopping-cart-empty-message" className="empty-cart">
            Seu carrinho está vazio
          </h1>
        )}
        <button type="button"> Finalizar Compra</button>
      </div>
    );
  }
}

export default Checkout;
