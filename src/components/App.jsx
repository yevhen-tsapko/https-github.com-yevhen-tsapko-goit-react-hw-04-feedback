import React, { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = name => {
    this.setState(prevState => {
      return { [name]: (prevState[name] += 1) };
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, el) => total + el);

  countPositiveFeedbackPercentage = () =>
    Number.parseInt((this.state.good * 100) / this.countTotalFeedback());

  render() {
    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Thease leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}
