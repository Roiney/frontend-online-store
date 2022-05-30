import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
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
        <Container>
          <Form>
            <Form.Group controlId="inputNome">
              <Form.Label>Digite seu nome completo:</Form.Label>
              <Form.Control data-testid="checkout-fullname" type="text" placeholder="Digite seu nome completo" />
            </Form.Group>
            <Form.Group controlId="form.Email">
              <Form.Label>Digite seu E-mail:</Form.Label>
              <Form.Control data-testid="checkout-email" type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="form.CPF">
              <Form.Label>Digite seu CPF:</Form.Label>
              <Form.Control data-testid="checkout-cpf" type="email" placeholder="000.000.000-XX" />
            </Form.Group>
            <Form.Group controlId="form.Phone">
              <Form.Label> Digite seu Telefone:</Form.Label>
              <Form.Control data-testid="checkout-phone" type="email" placeholder="(XX) XXXXX-XXXX" />
            </Form.Group>
            <Form.Group controlId="form.CEP">
              <Form.Label> Digite seu CEP:</Form.Label>
              <Form.Control data-testid="checkout-cep" type="email" placeholder="XXXXX-XX" />
            </Form.Group>
            <Form.Group controlId="form.address">
              <Form.Label> Digite seu Endereço Completo:</Form.Label>
              <Form.Control data-testid="checkout-address" type="email" />
            </Form.Group>
          </Form>
        </Container>
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
