import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const HeaderStepper = ({ step }) => {
  const steps = ['', '', ''];

  return (
    <Stepper activeStep={step}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default HeaderStepper;
