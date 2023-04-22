import PropTypes from 'prop-types';
import { NotMessage } from './Notification.styled';
export const Notification = ({ message }) => {
  return <NotMessage>{message}</NotMessage>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
