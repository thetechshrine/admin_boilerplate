import React from 'react';

import Logo from '../components/library/Logo';
import Text from '../components/library/Text';

export default {
  title: 'Library/Logo',
  component: Logo
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  shrinked: false,
  defaultView: (
    <Text size='2xl' weight={700} letterSpacing='-1px'>
      Logo
    </Text>
  ),
  shrinkedView: (
    <Text size='2xl' weight={700}>
      L
    </Text>
  )
};
