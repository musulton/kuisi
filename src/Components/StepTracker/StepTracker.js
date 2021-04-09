import * as React from 'react';

import './StepTracker.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import Config from './StepTracker.config';

/**
 * Calculate current step progress
 * @param {number} current
 * @param {number} total
 * @returns {number} range value 0 - 1
 * @private
 */
const _calculateSteps = (current, total) => current / total;

/**
 * Validation current value
 * @param {number} current
 * @param {number} total
 * @return {number|*}
 * @private
 */
const _currentValidation = (current, total) => {
  const _current = current < 0 ? 0 : current;
  return _current <= total ? _current : total;
}

/**
 * StepTracker Component
 * @param {number} current
 * @param {number} total
 * @return {JSX.Element}
 * @constructor
 */
const StepTracker = ({ current, total }) => {
  const ref = React.useRef(null);
  const [width, setWidth] = React.useState(0);
  const _current = _currentValidation(current, total);
  const percentage = _calculateSteps(_current, total);

  React.useEffect(() => {
    setWidth(ref.current.offsetWidth)
  }, [ref])

  return (
    <div className="kit-step-tracker-container">
      <div ref={ref} className="kit-step-tracker-progress-bar">
        <ProgressBar percent={percentage} width={width}/>
      </div>
      <div>{_current} / {total}</div>
    </div>
  );
};

StepTracker.propTypes = Config.propTypes;
StepTracker.defaultProps = Config.defaultProps;

export default StepTracker;
