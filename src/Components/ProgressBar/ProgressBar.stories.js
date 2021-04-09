import * as React from 'react';

import ProgressBarComponent from './ProgressBar';

export default {
  title: 'ProgressBar',
  component: ProgressBarComponent
};

const Template = (args) => <ProgressBarComponent {...args} />;

export const ProgressBar = Template.bind({});
ProgressBar.args = {
  percent: 0.2,
  width: 1000
};
