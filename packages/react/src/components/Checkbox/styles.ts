import * as Checkbox from '@radix-ui/react-checkbox';
import { styled, keyframes } from '../../styles';

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  background: '$zinc900',
  borderRadius: '$sm',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid $zinc900',

  '&[data-state=checked]': {
    background: '$violet600',
  },

  '&:focus': {
    border: '2px solid $violet600',
  },
});

const slideIn = keyframes({
  from: { transform: 'translateY(-100%)' },
  to: { transform: 'translateY(0)' },
});
const slideOut = keyframes({
  from: { transform: 'translateY(0)' },
  to: { transform: 'translateY(-100%)' },
});
export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$6',
  height: '$6',

  '&[data-state=checked]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state=unchecked]': {
    animation: `${slideOut} 200ms ease-out`,
  },
});
