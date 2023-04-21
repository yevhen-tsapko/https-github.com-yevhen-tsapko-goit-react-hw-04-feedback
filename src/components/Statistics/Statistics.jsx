import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    {console.log(good, neutral, bad, total, positivePercentage)}
    <h2> Statistics </h2>

    <div>
      <p>good : {good}</p>
      <p>neutral : {neutral}</p>
      <p>bad : {bad}</p>
      <p>Total : {total}</p>
      <p> Positive feedback : {positivePercentage}%</p>
    </div>
  </div>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
