import React from 'react';
import { getCategories } from '../services/api';
import './Categories.css';

class Categories extends React.Component {
  state = {
    categoryList: [],
  }

  async componentDidMount() {
    const response = await getCategories();
    this.setState({ categoryList: response });
  }

  render() {
    const { categoryList } = this.state;
    return (
      <aside className="categories-container">
        {
          categoryList.map(({ id, name }) => (
            <label key={ id } htmlFor={ id } data-testid="category">
              <input id={ id } type="radio" value={ name } name="categories" />
              { name }
            </label>
          ))
        }
      </aside>
    );
  }
}

export default Categories;
