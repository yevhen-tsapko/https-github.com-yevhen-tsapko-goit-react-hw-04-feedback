import PropTypes from 'prop-types';
import { OptionButton } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(btnName => (
    <OptionButton
      key={btnName}
      type="button"
      name={btnName}
      onClick={e => onLeaveFeedback(e.target.name)}
    >
      {btnName}
    </OptionButton>
  ));
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
