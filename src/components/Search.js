import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { name, value } = this.state;
    console.log(name);
    console.log(value)
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <input type="text" data-testid="query-input" name="inputValue" value={ inputValue } onChange={ this.handleChange } />
        <button data-testid="query-button" onClick={ this.handleClick }>Pesquisar</button>
        <p>
          <span data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
        </p>
      </div>
    );
  }
}

export default Search;
