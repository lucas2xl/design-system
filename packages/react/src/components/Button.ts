import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}
export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: '120px',
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  padding: '0 $4',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$violet600',

        '&:not(:disabled):hover': {
          background: '$violet500',
        },
        '&:disabled': {
          background: '$zinc400',
        },
      },

      secondary: {
        color: '$violet500',
        border: '2px solid $violet600',

        '&:not(:disabled):hover': {
          background: '$violet600',
          color: '$white',
        },
        '&:disabled': {
          color: '$zinc400',
          borderColor: '$zinc400',
        },
      },

      tertiary: {
        color: '$zinc200',

        '&:not(:disabled):hover': {
          color: '$white',
        },
        '&:disabled': {
          color: '$zinc500',
        },
      },
    },

    size: {
      sm: {
        height: '38px',
      },
      md: {
        height: '42px',
      },
      lg: {
        height: '48px',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

Button.displayName = 'Button';
