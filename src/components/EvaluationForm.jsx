import React, { Component } from 'react';
import PreviousEvaluations from './PreviousEvaluations';

class EvaluationForm extends Component {
  state = {
    showPreviousEvaluations: false,
  }

  handleEvaluations = () => {
    const { showPreviousEvaluations } = this.state;
    this.setState({ showPreviousEvaluations: !showPreviousEvaluations });
  };

  render() {
    const { showPreviousEvaluations } = this.state;
    return (
      <div>
        <input
          type="email"
          name=""
          id="email"
          data-testid="product-detail-email"
          placeholder="Email"
        />
        {/* data-testid="${index}-rating" */}
        <i>&#x02606;</i>
        <i>&#x02606;</i>
        <i>&#x02606;</i>
        <i>&#x02606;</i>
        <i>&#x02606;</i>
        <input
          type="text"
          name="message"
          id="message"
          data-testid="product-detail-evaluation"
          placeholder="Mensagem (opcional)"
        />
        <button
          type="submit"
          data-testid="submit-review-btn"
          onClick={ this.handleEvaluations }
        >
          Avaliar
        </button>

        {showPreviousEvaluations && <PreviousEvaluations />}
      </div>
    );
  }
}

export default EvaluationForm;
