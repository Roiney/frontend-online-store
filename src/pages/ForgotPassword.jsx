/* eslint-disable no-alert */
import React, { Component } from 'react';

class ForgotPassword extends Component {
  state = {
    email: '',
  };

  getValue = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { email } = this.state;
    alert(`Nova senha enviada para ${email}`);
  }

  render() {
    return (
      <div>
        <p>Insira o email cadastrado para recuperar sua senha:</p>
        <input
          type="email"
          name="email"
          id="email"
          onChange={ this.getValue }
        />
        <input
          type="button"
          value="Enviar"
          onClick={ this.handleClick }
        />

      </div>
    );
  }
}

export default ForgotPassword;
