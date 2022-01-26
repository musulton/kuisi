import * as React from 'react';

import './BoxItemList.css';
import Config from './BoxItemList.config';

/**
 * Kit Box Item List Component
 */
const BoxItemList = ({ variant, size, text, ...props }) => (
  <div>
    <div>
      <span/>
      <span/>
      <span/>
    </div>
    <div
      className={[
        'kit-box-item-list',
        `kit-box-item-list--${size}`,
        `kit-box-item-list--${variant}`
      ].join(' ')}
      {...props}
    >
      {text}
    </div>
  </div>
);

BoxItemList.propTypes = Config.propTypes;
BoxItemList.defaultProps = Config.defaultProps;

export default BoxItemList;
