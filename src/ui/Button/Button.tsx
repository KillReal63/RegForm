import { FC, PropsWithChildren } from 'react';
import styles from './Button.module.css';

type Props = {
  onClick: () => void;
  variant?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
  variant,
  type,
}) => {
  return (
    <button
      type={type}
      className={` ${styles.button} ${
        variant === 'forward' ? styles.button_forward : styles.button_back
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
