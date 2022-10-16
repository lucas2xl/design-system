import { StoryObj, Meta } from '@storybook/react';
import { Box, Text, TextInput, TextInputProps } from '@hananim/react';

export default {
  title: 'Form/Text Input',
  component: TextInput,

  args: {
    placeholder: 'Type your name',
    disabled: false,
    prefix: '',
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    prefix: {
      control: { type: 'text' },
    },
  },
  decorators: [
    Story => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text size="sm">Your name</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {};
export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};
export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'https://',
    placeholder: '',
  },
};
