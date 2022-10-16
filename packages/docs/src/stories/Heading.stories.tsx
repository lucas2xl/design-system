import { StoryObj, Meta } from '@storybook/react';
import { Heading, HeadingProps } from '@hananim/react';

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Lorem ipsum dolor sit amet!',
    size: 'md',
    as: 'h1',
  },
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      control: { type: 'inline-radio' },
    },
    as: {
      options: ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o componente é renderizado como um `h2`, mas você pode alterar isso passando o atributo `as`.',
      },
    },
  },
};
