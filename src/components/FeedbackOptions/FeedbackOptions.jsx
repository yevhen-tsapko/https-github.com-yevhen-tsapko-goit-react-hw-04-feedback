import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(btnName => (
    <button
      key={btnName}
      type="button"
      name={btnName}
      onClick={e => onLeaveFeedback(e.target.name)}
    >
      {btnName}
    </button>
  ));
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
