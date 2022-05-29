import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
  state = {
    user: '',
    password: '',
  }

  handleClick = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { user, password } = this.state;
    return (
      <div>
        <input
          type="text"
          name="user"
          // id="user"
          placeholder="usuário"
        />
        <input
          type="password"
          name="password"
          // id="password"
          placeholder="senha"
        />
        <input
          type="button"
          value="Logar"
          onClick={ this.handleClick }
          onSubmit={ (!(user === jorge && password === '1234'))
          && console.log('Acesso negado') }
        />
        <Link to="/forgot-pass">Esqueceu sua senha?</Link>
        <Link to="/">Cadastre-se</Link>
      </div>
    );
  }
}

export default LoginPage;
