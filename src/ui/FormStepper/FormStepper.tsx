import { FC } from 'react';
import ProgressBar from '../../assets/icons/Stepper/ProgressBar';
import Check from '../../assets/icons/Stepper/Check';
import Dot from '../../assets/icons/Stepper/Dot';
import styles from './FormStepper.module.css';

interface Props {
  variant: 'primary' | 'secondary' | 'finally';
}

const FormStepper: FC<Props> = ({ variant = 'primary' }) => {
  if (variant === 'secondary') {
    return (
      <>
        <div className={styles.wrapper}>
          <Check />
          <ProgressBar color='#5558FA' />
          <Dot color='#5558FA' />
          <ProgressBar color='#A6A6A6' />
          <Dot color='#A6A6A6' />
        </div>
        <div className={styles.current_step}>
          <p>1</p>
          <p style={{ fontWeight: 'bold' }}>2</p>
          <p>3</p>
        </div>
      </>
    );
  }

  if (variant === 'finally') {
    return (
      <>
        <div className={styles.wrapper}>
          <Check />
          <ProgressBar color='#5558FA' />
          <Check />
          <ProgressBar color='#5558FA' />
          <Dot color='#5558FA' />
        </div>
        <div className={styles.current_step}>
          <p>1</p>
          <p>2</p>
          <p style={{ fontWeight: 'bold' }}>3</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles.wrapper}>
        <Dot color='#5558FA' />
        <ProgressBar color='#A6A6A6' />
        <Dot color='#A6A6A6' />
        <ProgressBar color='#A6A6A6' />
        <Dot color='#A6A6A6' />
      </div>
      <div className={styles.current_step}>
        <p style={{ fontWeight: 'bold' }}>1</p>
        <p>2</p>
        <p>3</p>
      </div>
    </>
  );
};

export default FormStepper;
