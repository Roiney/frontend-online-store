import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
import './Categories.css';

class Categories extends React.Component {
  async componentDidMount() {
    const response = await getCategories();
    this.setState({ categoryList: response });
  }

  render() {
    const { handleClick } = this.props;
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
                onClick={ handleClick() }
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
  handleClick: PropTypes.func.isRequired,
};

export default Categories;
