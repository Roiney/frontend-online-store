import React, { Component } from 'react';

class PreviousEvaluations extends Component {
  state = {
    evaluations: '',
  }

  render() {
    const { evaluations } = this.state;
    return (
      <div>
        {
          evaluations.map(({ email, rating, message }) => (
            <div key={ email }>
              {' '}
              <span>{email}</span>
              {rating}
              <p>{message}</p>
            </div>))
        }
      </div>
    );
  }
}

export default PreviousEvaluations;
