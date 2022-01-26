import PropTypes from 'prop-types';

const propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'normal']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

const defaultProps = {
  variant: 'normal',
  size: 'medium',
  onClick: undefined,
}

export default { propTypes, defaultProps }
