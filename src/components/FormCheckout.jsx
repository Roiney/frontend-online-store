import React from 'react';

class FormCheckout extends React.Component {
  render() {
    return (
      <div className="container-inputs">
        <input
          data-testid="checkout-fullname"
          placeholder="Nome Completo"
          type="text"
        />

        <input
          data-testid="checkout-cpf"
          placeholder="CPF"
          type="text"
        />

        <input
          data-testid="checkout-email"
          placeholder="E-mail"
          type="email"
        />

        <input
          data-testid="checkout-phone"
          placeholder="Telefone"
          type="text"
        />

        <input
          data-testid="checkout-cep"
          placeholder="CEP"
          type="text"
        />

        <input
          data-testid="checkout-address"
          placeholder="Endereço"
          type="text"
        />

        <input
          placeholder="Complemento"
          type="text"
        />

        <input
          placeholder="Número"
          type="text"
        />

        <input
          placeholder="Cidade"
          type="text"
        />
        <select>
          <option>Estado</option>
        </select>
      </div>
    );
  }
}

export default FormCheckout;
