import React from 'react';

import Text from '../components/library/Text';

export default {
  title: 'Library/Text',
  component: Text,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['text', 'gray', 'primary', 'secondary', 'white']
      }
    }
  }
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
  size: 'xl'
};
