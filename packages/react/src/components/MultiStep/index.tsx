import { Label, MultiStepContainer, Step, Steps } from './styles';

export interface MultiStepProps {
  size: number;
  currentStep?: number;
}
export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, index) => (
          <Step key={index} active={currentStep >= index + 1} />
        ))}
      </Steps>
    </MultiStepContainer>
  );
}

MultiStep.displayName = 'MultiStep';
