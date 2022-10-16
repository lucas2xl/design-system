import { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from '@alchemy/react';

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children: 'Lorem ipsum dolor sit amet?',
    size: 'md',
    as: 'p',
  },
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    size: {
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: { type: 'inline-radio' },
    },
    as: {
      options: ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
    size: 'xl',
  },
};
