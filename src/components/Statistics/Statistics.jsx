import PropTypes from 'prop-types';
import { StatParameters } from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <StatParameters>
    <li>good : {good}</li>
    <li>neutral : {neutral}</li>
    <li>bad : {bad}</li>
    <li>Total : {total}</li>
    <li> Positive feedback : {positivePercentage}%</li>
  </StatParameters>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
