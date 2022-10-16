import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType;
}
export const Heading = styled('h2', {
  fontFamily: '$default',
  fontSize: '$md',
  lineHeight: '$loose',
  margin: 0,
  color: '$zinc100',

  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      xl: { fontSize: '$5xl' },
      '2xl': { fontSize: '$6xl' },
      '3xl': { fontSize: '$7xl' },
      '4xl': { fontSize: '$8xl' },
      '5xl': { fontSize: '$9xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

Heading.displayName = 'Heading';
