import React from 'react';

class Card extends React.Component {
  render() {
    const { title, price, imagem } = this.props;
    return (
      <div>
        <h1 data-testid="product">{ title }</h1>
        <p>{ price }</p>
        <img></img>
      </div>

    );
  }
}

export default Card;
