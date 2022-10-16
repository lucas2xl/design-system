import { styled } from '../../styles';
import { Text } from '../Text';

export const MultiStepContainer = styled('div', {});

export const Label = styled(Text, {
  color: '$zinc200',

  defaultVariants: {
    size: 'xs',
  },
});

export const Steps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '$1',
});

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$sm',
  background: '$zinc600',

  variants: {
    active: {
      true: {
        background: '$zinc100',
      },
    },
  },
});
