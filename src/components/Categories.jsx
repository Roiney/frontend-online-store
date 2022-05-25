import React from 'react';
import PropTypes from 'prop-types';
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
    const { handleApertar } = this.props;
    const { categoryList } = this.state;
    return (
      <aside className="categories-container">
        {
          categoryList.map(({ id, name }) => (
            <label key={ id } htmlFor={ id } data-testid="category">
              <input
                id={ id }
                type="radio"
                value={ name }
                name="categories"
                onClick={ handleApertar }
              />
              { name }
            </label>
          ))
        }
      </aside>
    );
  }
}

Categories.propTypes = {
  handleApertar: PropTypes.func.isRequired,
};

export default Categories;
