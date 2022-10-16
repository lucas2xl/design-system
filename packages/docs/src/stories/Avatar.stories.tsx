import { StoryObj, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from '@alchemy/react';

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://avatars.githubusercontent.com/u/65921350?v=4',
    alt: 'Avatar',
  },
  argTypes: {
    src: {
      control: { type: 'text' },
    },
    alt: {
      control: { type: 'text' },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: '',
  },
};
