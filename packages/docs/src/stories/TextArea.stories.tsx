import { StoryObj, Meta } from '@storybook/react';
import { Box, Text, TextArea, TextAreaProps } from '@alchemy/react';

export default {
  title: 'Form/Text Area',
  component: TextArea,

  args: {
    placeholder: 'Add any observations',
    disabled: false,
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  decorators: [
    Story => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text size="sm">Observations</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {};
export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};
