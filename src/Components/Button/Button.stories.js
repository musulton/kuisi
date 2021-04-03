import React from 'react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  variant: 'secondary'
};

export const Normal = Template.bind({});
Normal.args = {
  label: 'Button',
};
