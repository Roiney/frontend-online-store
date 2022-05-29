/* eslint-disable no-alert */
import React, { Component } from 'react';

class ForgotPassword extends Component {
  state = {
    email: '',
  }

  handleClick = ({ target: name }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { email } = this.state;
    return (
      <div>
        <p>Insira o email cadastrado para recuperar sua senha:</p>
        <input
          type="email"
          name="email"
          id="email"
        />
        <input
          type="button"
          value="Enviar"
          onClick={ this.handleClick }
          onSubmit={ alert(`Nova senha enviada para ${email}`) }
        />

      </div>
    );
  }
}

export default ForgotPassword;
