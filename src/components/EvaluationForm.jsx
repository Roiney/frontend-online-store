import React, { Component } from 'react';
import { readSavedEvaluations, saveEvaluation } from './storageEvaluation';
import PreviousEvaluations from './PreviousEvaluations';

class EvaluationForm extends Component {
  state = {
    // showPreviousEvaluations: false,
    evaluations: [],
    email: '',
    rating: '',
    message: '',
  }

  async componentDidMount() {
    const savedEvaluations = readSavedEvaluations();
    this.setState({ evaluations: savedEvaluations });
  }

  // showEvaluations = () => {
  //   const { showPreviousEvaluations } = this.state;
  //   this.setState({ showPreviousEvaluations: !showPreviousEvaluations });
  // };

  handleClick = ({ target: { id } }) => {
    this.setState({ rating: id });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  setEvaluations = () => {
    const { email, rating, message } = this.state;
    this.setState((prevState) => ({
      evaluations: [...prevState.evaluations, { email, rating, message }],
    }), () => {
      const { evaluations } = this.state;
      saveEvaluation(evaluations);
    });
  }

  render() {
    const { evaluations, email, message } = this.state;
    const ratingStars = ['1', '2', '3', '4', '5'];
    return (
      <div>
        <input
          type="email"
          name="email"
          value={ email }
          id="email"
          data-testid="product-detail-email"
          placeholder="Email"
          onChange={ this.handleChange }
        />
        {ratingStars.map((value, index) => (
          <i
            key={ value }
            data-testid={ `${value}-rating` }
            id={ value }
            onClick={ this.handleClick }
            onKeyPress={ () => {} }
            role="link"
            tabIndex={ index }
          >
            &#x02606;
          </i>
        ))}
        <input
          type="text"
          name="message"
          value={ message }
          id="message"
          data-testid="product-detail-evaluation"
          placeholder="Mensagem (opcional)"
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          data-testid="submit-review-btn"
          onClick={ this.setEvaluations }
        >
          Avaliar
        </button>

        <PreviousEvaluations evaluations={ evaluations } />
      </div>
    );
  }
}

export default EvaluationForm;
