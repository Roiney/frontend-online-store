import React from 'react';
import PropTypes from 'prop-types';

class FormCheckout extends React.Component {
  render() {
    const { handleChange, userInfo } = this.props;
    // userInfo: {
    //   nome: '',
    //   cpf: '',
    //   email: '',
    //   tel: '',
    //   cep: '',
    //   endereco: '',
    //   complemento: '',
    //   numero: '',
    //   cidade: '',
    //   estado: '',
    // },
    return (
      <div className="container-inputs">
        <input
          data-testid="checkout-fullname"
          placeholder="Nome Completo"
          type="text"
          name="nome"
          onChange={ handleChange }
        />

        <input
          data-testid="checkout-cpf"
          placeholder="CPF"
          type="text"
          name="cpf"
          onChange={ handleChange }
        />

        <input
          data-testid="checkout-email"
          placeholder="E-mail"
          type="email"
          name="email"
          onChange={ handleChange }
        />

        <input
          data-testid="checkout-phone"
          placeholder="Telefone"
          type="text"
          name="tel"
          onChange={ handleChange }
        />

        <input
          data-testid="checkout-cep"
          placeholder="CEP"
          type="text"
          name="cep"
          onChange={ handleChange }
        />

        <input
          data-testid="checkout-address"
          placeholder="Endereço"
          type="text"
          name="endereco"
          onChange={ handleChange }
        />

        <input
          placeholder="Complemento"
          type="text"
          name="complemento"
          onChange={ handleChange }
        />

        <input
          placeholder="Número"
          type="text"
          name="numero"
          onChange={ handleChange }
        />

        <input
          placeholder="Cidade"
          type="text"
          name="cidade"
          onChange={ handleChange }
        />
        <select>
          <option>Estado</option>
        </select>
      </div>
    );
  }
}

FormCheckout.propTypes = {
  handleChange: PropTypes.func.isRequired,
  userInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default FormCheckout;
