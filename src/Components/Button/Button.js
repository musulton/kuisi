import * as React from 'react';

import './Button.css';
import Config from './Button.config';

/**
 * Kit Button Component
 */
const Button = ({ variant, size, label, ...props }) => (
  <button
    type="button"
    className={[
      'kit-button',
      `kit-button--${size}`,
      `kit-button--${variant}`
    ].join(' ')}
    {...props}
  >
    {label}
  </button>
);

Button.propTypes = Config.propTypes;
Button.defaultProps = Config.defaultProps;

export default Button;
