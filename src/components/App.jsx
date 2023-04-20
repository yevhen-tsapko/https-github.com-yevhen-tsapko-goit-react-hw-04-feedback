import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  stateKeys = Object.keys(this.state);

  addFeedback(name) {
    this.setState(prevState => {
      return { [name]: (prevState[name] += 1) };
    });
  }
  countTotalFeedback() {
    return Object.values(this.state).reduce((total, el) => total + el);
  }
  countPositiveFeedbackPercentage() {
    return Number.parseInt((this.state.good * 100) / this.countTotalFeedback());
  }
  render() {
    return (
      <div>
        <h1 title="Thease leave feedback">Thease leave feedback</h1>
        <div
          style={{
            height: '10vh',
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
          }}
        >
          {this.stateKeys.map(btnName => (
            <button
              key={btnName}
              type="button"
              name={btnName}
              onClick={e => this.addFeedback(e.target.name)}
            >
              {btnName}
            </button>
          ))}
        </div>

        <h2>Statistics</h2>

        {this.countTotalFeedback() ? (
          <div>
            {this.stateKeys.map(btnName => (
              <p key={btnName}>
                {btnName} : {this.state[btnName]}
              </p>
            ))}
            <p>Total : {this.countTotalFeedback()}</p>
            <p>
              {' '}
              Positive feedback : {this.countPositiveFeedbackPercentage()}%
            </p>
          </div>
        ) : (
          <p> There is no feedback </p>
        )}
      </div>
    );
  }
}
