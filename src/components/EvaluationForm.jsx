import React, { Component } from 'react';

class EvaluationForm extends Component {
  render() {
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
        >
          Avaliar
        </button>
      </div>
    );
  }
}

export default EvaluationForm;
