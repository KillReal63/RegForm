import { FC, PropsWithChildren } from 'react';
import styles from './Button.module.css';

interface Props {
  onClick?: () => void;
  variant?: string;
}

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
  variant,
}) => {
  return (
    <button
      className={` ${styles.button} ${
        variant === 'forward' ? styles.button_forward : styles.button_back
      }`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
