import { StoryObj, Meta } from '@storybook/react';
import { Box, BoxProps, Text } from '@hananim/react';

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text as="span"> Testando o elemento box</Text>,
  },
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
