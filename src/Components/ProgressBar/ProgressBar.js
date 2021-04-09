import * as React from 'react';

import './ProgressBar.css';
import Config from './ProgressBar.config';

/**
 * Kit ProgressBar Component
 * @param {number} percent
 * @param {number} width
 * @return {JSX.Element}
 * @constructor
 */
const ProgressBar = ({ percent, width }) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setValue(percent * width);
  }, [percent, width]);

  return (
    <div className="kit-progress-container" style={{ width }}>
      <div style={{ width: `${value}px` }} className="kit-progress" />
    </div>
  )
};

ProgressBar.propTypes = Config.propTypes;

export default ProgressBar;
