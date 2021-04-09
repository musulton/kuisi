import PropTypes from 'prop-types';

const propTypes = {
  current: PropTypes.number,
  total: PropTypes.number
};

const defaultProps = {
  current:  0,
  total: 1
};

export default { propTypes, defaultProps }
