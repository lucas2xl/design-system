import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType;
}
export const Text = styled('span', {
  fontFamily: '$default',
  fontSize: '$md',
  lineHeight: '$normal',
  color: '$zinc100',

  variants: {
    size: {
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '3xl': { fontSize: '$3xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

Text.displayName = 'Text';
