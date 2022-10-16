import { ComponentProps } from 'react';
import { styled } from '../styles';

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}
export const TextArea = styled('textarea', {
  backgroundColor: '$zinc900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $zinc900',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$normal',
  resize: 'vertical',
  minHeight: '80px',

  '&:focus': {
    outline: 'none',
    borderColor: '$violet600',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$zinc400',
  },
});

TextArea.displayName = 'TextArea';
