import * as React from 'react';

import StepTrackerComponent from './StepTracker';

export default {
  title: 'StepTracker',
  component: StepTrackerComponent
};

const Template = (args) => <StepTrackerComponent {...args} />;

export const StepTracker = Template.bind({});
StepTracker.args = {
  current: 2,
  total: 5
};
