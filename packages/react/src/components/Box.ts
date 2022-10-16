import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType;
}
export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$zinc800',
  border: '1px solid $zinc900',
});

Box.displayName = 'Box';
